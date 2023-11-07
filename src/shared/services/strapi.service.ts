import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StrapiService extends RestService {

  getBlog (): Observable<any> {
    const strapiBlogUrl = `/api/blogs`
    return this.getStrapi(strapiBlogUrl);
  }

  getUserByUserName(userName: string): Observable<any> {
		const UserUrls = `/user/${userName}`
    return this.get(UserUrls);
  }
}