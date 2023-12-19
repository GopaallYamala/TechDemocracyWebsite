import { Component, OnInit } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";
import { UtilService } from "src/shared/services/util.service";

@Component({
  selector: 'contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.scss'],
  animations: [AnimationDefinitions]
})

export class ContactInfoComponent implements OnInit {

  country:string;
  display: any;
  emailObj: any;

  constructor(private readonly utilService: UtilService) { }

  ngOnInit() {
    this.utilService.dataState.subscribe(
      (data: string) => {
        this.country = data;
      });
  }

  sendMessage() {
    this.emailObj = {
      from: 'no-reply@techdemocracy.com',
      to: 'lakshman.kotipalli@techdemocracy.com, ramu.vundavelli@techdemocracy.com',
      subject: 'test sendmail',
      html: 'Mail of test sendmail ',
    }
    this.callSendMail(this.emailObj);
  }

  callSendMail(data) {
    // const sendmail = require('sendmail')();

    // sendmail(data, function (err, reply) {
    //   console.log(err && err.stack);
    //   console.dir(reply);
    // });
  }

}
