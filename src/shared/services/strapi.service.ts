import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class StrapiService extends RestService {
  // Resource-airticle
  getBlog(): Observable<any> {
    const strapiResourceUrl = `/api/resource-articles?populate=*`
    return this.getStrapi(strapiResourceUrl);
  }
// Categorys
  getCategory(){
    const strapiCategorysUrl = `/api/categories`
    return this.getStrapi(strapiCategorysUrl);
  }

  getFullBlog(): Observable<any> {
    const strapiBlogUrl = `/api/blogs?populate=HeroImage&populate=SupportingImage&populate=SupportingDocuments`
    return this.getStrapi(strapiBlogUrl);
  }

  getUserByUserName(userName: string): Observable<any> {
    const UserUrls = `/user/${userName}`
    return this.get(UserUrls);
  }
}
