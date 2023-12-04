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
			'Authorization': 'Bearer bcdb4ddd9d59d7179dbff703b17605159943340f98cfe919290f0c9e26ce48e4660c5c8a98f709210c45cd4ce15a67f973ac754c77cd0b60594abc5e4e689e7e640b594cbb0b56e76868c7fa16c034a02be20bfec8bfb0301ac8c756fd9d5bab07b25afd0b0a0880740c3375c450bf6fa19edb87fbcbefdd1600565b4bb6a0ae'
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
<<<<<<< HEAD
	// }	


}
=======
	// }


}
>>>>>>> 9e2e237c67ae6d6daa3d52ad125c8a5ded2b1b5e
