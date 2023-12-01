import { Component, OnInit } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";

@Component({
  selector: 'contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.scss'],
  animations: [AnimationDefinitions]
})

export class ContactInfoComponent implements OnInit {
  ngOnInit() {

  }

  display: any;

}
