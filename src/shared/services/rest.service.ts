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
      this.maincontexturl = 'http://125.20.96.9:4201';
    } else {
      // this.maincontexturl = 'http://10.0.20.24:4201';
      // this.maincontexturl = 'http://10.0.20.50:4201';
      // this.maincontexturl = 'http://10.0.1.27:4201';
      this.maincontexturl = 'http://127.0.0.1:3000'
      this.strapiContextUrl = 'http://localhost:1337'
      // this.maincontexturl = 'http://10.0.20.43:4201';


    }
  }

  private get headers(): HttpHeaders {
    const headerDict = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
      // 'Authorization': 'Bearer 54f483a805db87d66e79a24dfaedeadaf16b46ce95212ce468b405a138879fb323a3f7fed825c751f363608ddf73573e8d75a3130a401b44bf120b572efb35555d93730877e45070fd6f889fd10f355a321e5a87115dfa1f01de3a59727f893de157a59433ccae85b48a0d0231906dfb1e538729c2dfbefb52183767db66fe66'
      'Authorization': 'Bearer 5c68362ab6172c18aa9a59b323d937a471460cfb20d95f0872188b336e21de8b028e32792c6e665551cee715bd17ed034c3af59cb2b77d474d06ab482524a502bae1a2eb0df114a9f2ad9d46aa1f0a263ece7045e56e1b052e0f81e45cd3d5c5d04ec6dc6a1b509c59cb7dd7518a32a2e1afd846711dca8cb596d9b72dd97157'
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

  public sendEmail (url, data) {
    return this.httpClient.post(url, data);
  }

  public sendFeedbackMail(): any {
    let data = {
      name: 'Chandra Bose',
      email: 'lakshman.kotipalli@techdemocracy.com'
    }
    this.sendEmail("http://localhost:3000/sendMail", data).subscribe(
      respData => {
        let res: any = respData;
        console.log(res, 'resssssssssssssssssssssssssssss');
        
        console.log(`${data.name} - mail has been sent`);
      },
      err => {
        console.log(err);
      }
    );
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
