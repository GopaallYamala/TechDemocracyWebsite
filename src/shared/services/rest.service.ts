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
      'Authorization': 'Bearer 8381aed0d6f4809bab767c991a63b957a835cc72cfe433f5a14bba3bd5db7a07a4a7f5a8ad4f16db7edf2c19f2850ff3ed8aae2151829b66f1e39d705d59689eddcd702e5d479ceadd4a173066fc9e92a432187aa0a4c5429ecf59eacb00e6ac5fbaa6e9594b712ef55f801e6edd7e542713593fd7aa9c6e26471f61c7794423'
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
