import { Component, OnInit } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";
import { UtilService } from "src/shared/services/util.service";
import { CompanyService } from "../../shared/company.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.scss'],
  animations: [AnimationDefinitions]
})

export class ContactInfoComponent implements OnInit {

  country: string;
  display: any;
  emailObj: any;
  contactInfoForm: FormGroup;
  contactInfo: ContactInfo;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(private readonly utilService: UtilService,
    private readonly companyService: CompanyService,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactInfoForm = this.formBuilder.group(ContactForm);
    this.utilService.dataState.subscribe(
      (data: string) => {
        this.country = data;
      });
  }

  // sendMessage() {
  //   this.emailObj = {
  //     from: 'no-reply@techdemocracy.com',
  //     to: 'lakshman.kotipalli@techdemocracy.com, ramu.vundavelli@techdemocracy.com',
  //     subject: 'test sendmail',
  //     html: 'Mail of test sendmail ',
  //   }
  //   // this.callSendMail(this.emailObj);
  // }

  callSendMail() {
    this.sendNewMail({ ...this.contactInfo, ...this.contactInfoForm.value });
  }

  sendNewMail(contactDetails: ContactInfo) {
    this.companyService.sendMail(contactDetails).subscribe(res => {
      this.showSuccessMessage = true;
      this.contactInfoForm.reset();
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    },
      err => {
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 3000);
      });
  }
}

export const ContactForm = {
  fullName: [''],
  email: [''],
  number: [''],
  helpText: []
}

export class ContactInfo {
  fullName: string
  email: string
  number: number
  helpText: string
}
