import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: 'contact-us',
  styleUrls: ['contact-us.component.scss'],
  templateUrl: 'contact-us.component.html',
})

export class ContactUsCompoent implements OnInit {

  ngOnInit() {
    // Meta tags starts
    this.meta.addTags([
      {name: 'title', content: "Contact Us | Get in Touch with TechDemocracy | Plan a Meeting"},
      { name: 'description', content: "Connect effortlessly with TechDemocracy’s delivery center in the US, India, Canada, or Philippines using our contact information or the inquiry submission form." },
      { name: 'keywords', content: "contact information, inquiry form, contact details, inquiry submission, India office, techdemocracy India, Cotelligent, connect with us, TechDemocracy US, TechDemocracy Canada, TechDemocracy Philippines, contact form, get connected, customer support, reach us" }]
    );
    // Meta tags ends
  }

  constructor (private meta: Meta) {}

}

