import { Injectable } from "@angular/core";
import { RestService } from "src/shared/services/rest.service";

@Injectable({
  providedIn: 'root'
})

export class CompanyService extends RestService {

  sendMail(data: any) {
    const contactExpertsUrl = '/sendmail';
    return this.post(contactExpertsUrl, data);
  }
}
