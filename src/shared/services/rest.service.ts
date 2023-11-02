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
			 this.maincontexturl = 'http://10.0.1.27:4201';
			 this.strapiContextUrl = 'http://localhost:1337'
			// this.maincontexturl = 'http://10.0.20.43:4201';

		}
	}

  private get headers(): HttpHeaders {
		const headerDict = {
			'Content-Type': 'application/json',
			// 'Authorization': 'Bearer ' + localStorage.getItem('JWT_TOKEN'),
			'Authorization': 'Bearer 63b72a505898c197db0313e19f3c01c951324587bf2c10d13b53eec26f63f001e1195e26dc3017b6689690ac1358924b52f1595e227806c1f3921135c4feb9e1c6c30cf1e1c1d4218f73f470381a231a87e0b6a833e9c136e78163bfc4bb06f7f6e9dc6d8fec7f1c2223481db87dcbfb09752e49b4379f1bb58846ef384bb9f1'
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

	public get(relativeUrl: string, httpParams?: HttpParams): any {
		return this.httpClient.get(this.maincontexturl + relativeUrl,
		  {
			headers: this.headers,
			params: httpParams,
			// responseType: 'arraybuffer'
			responseType: 'blob'
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
	
	 
}