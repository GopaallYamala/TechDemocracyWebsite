import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  maincontexturl: string | undefined;
  strapiContextUrl: string | undefined;
  constructor(private httpClient: HttpClient) {

    if (environment.production) {
      // this.maincontexturl = '/backend-api';
      // this.maincontexturl = 'http://125.20.96.9:4201';
      // this.maincontexturl = 'http://162.240.148.84:52518';
      // this.maincontexturl = 'http://localhost:52518';
      // this.strapiContextUrl = 'http://162.240.148.84:1337'
      this.maincontexturl = '';
      this.strapiContextUrl = '';
    } else {
      // this.maincontexturl = 'http://10.0.20.24:4201';
      // this.maincontexturl = 'http://10.0.20.50:4201';
      // this.maincontexturl = 'http://10.0.1.27:4201';
      this.maincontexturl = 'http://127.0.0.1:52518'
      this.strapiContextUrl = 'http://localhost:1337'
      // this.maincontexturl = 'http://10.0.20.43:4201';


    }
  }

  private get headers(): HttpHeaders {
    const headerDict = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
      // 'Authorization': 'Bearer 54f483a805db87d66e79a24dfaedeadaf16b46ce95212ce468b405a138879fb323a3f7fed825c751f363608ddf73573e8d75a3130a401b44bf120b572efb35555d93730877e45070fd6f889fd10f355a321e5a87115dfa1f01de3a59727f893de157a59433ccae85b48a0d0231906dfb1e538729c2dfbefb52183767db66fe66'
      'Authorization': 'Bearer 34e640b3541260c0ca82c1b7e1c3368a7111968963fa42dfe54b5d7a829370017a74547f712e515651ddda8c15a420caf1d6a4cab4332033d15023216c0396a5822d543b8deee4631cb3e7ba3db74f329f4ab31a2481af5da56ab7209baabb76afb54fcc28fd21d7d6faf7aaf33f628ea47b8ea95ffccb28915423e2f6271771'
    }
    return new HttpHeaders(headerDict);
  }

  private get headersMultipart(): HttpHeaders {
    const headerDict = {
      'Accept': 'text/csv',
      // 'Authorization': 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
    }
    return new HttpHeaders(headerDict);
  }

  private get headersplain(): HttpHeaders {
		const headerDict = {
			// 'Authorization': 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
		}
		return new HttpHeaders(headerDict);
	}

  public get(relativeUrl: string, httpParams?: HttpParams): any {
    return this.httpClient.get(this.maincontexturl + relativeUrl,
      {
        headers: this.headers,
        params: httpParams,
        // responseType: 'arraybuffer'
        responseType: 'json'
      }).pipe(
        map(
          (res: any) => {
            console.log("GET Request: ", res);
            return <any>res;
          },
          (error: any) => {
            console.log("GET Request Error", error);
          }
        ),
        shareReplay()
      );
  }

  // Get request for Strapi

  public getStrapi(relativeUrl: string, httpParams?: HttpParams): any {
    return this.httpClient.get(this.strapiContextUrl + relativeUrl,
      {
        headers: this.headers,
        params: httpParams,
        // responseType: 'arraybuffer'
        responseType: 'json'
      }).pipe(
        map(
          (res: any) => {
            console.log("GET Request: ", res);
            return <any>res;
          },
          (error: any) => {
            console.log("GET Request Error", error);
          }
        ),
        shareReplay()
      );
  }

  public post(relativeUrl: string, data: any, httpParams?: HttpParams): any {
    return this.httpClient.post(this.maincontexturl + relativeUrl, data,
      {
        headers: this.headers,
        params: httpParams
      });
  }

  public postMultipart(relativeUrl: string, data?: any, httpParams?: HttpParams) {
    return this.httpClient.post(this.maincontexturl + relativeUrl, data,
      {
        headers: this.headersMultipart,
        responseType: 'text',
        params: httpParams
      });
  }


  uploadCSVFile(formData: FormData) {
    return this.httpClient.post(`${this.maincontexturl}/upload-form`, formData);
  }

  // getStrapiBlogPost (relativeUrl) {
  // 	return this.httpClient.get(this.strapiContextUrl + relativeUrl,
  // 		{
  // 			headers: this.headers
  // 		})
  // }


  public delete(relativeUrl: string, httpParams?: HttpParams): any {
		return this.httpClient.delete(this.maincontexturl + relativeUrl,
			{
				headers: this.headersplain,
				responseType: 'text',
				params: httpParams
			});
	}

	public put(relativeUrl: string, data?: any, httpParams?: HttpParams) {
		return this.httpClient.put(this.maincontexturl + relativeUrl, data,
			{
				headers: this.headers,
				responseType: 'text',
				params: httpParams
			});
	}


}
