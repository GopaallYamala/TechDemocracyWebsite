import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'other-locations-banner',
  templateUrl: './other-locations-banner.component.html',
  styleUrls: ['./other-locations-banner.component.scss']
})

export class OtherLocationsBannerComponent implements OnInit {

  constructor (private meta: Meta) {}
  ngOnInit () {
    this.meta.addTags([
      {name: 'title', content: "Delivery Center India - Cotelligent. Delivery Center United States - TechDemocracy. Delivery Center Canada. TechDemocracy Delivery Center Philippines | Get in touch with TechDemocracy"},
      { name: 'description', content: "Connect effortlessly with TechDemocracy’s delivery center in India using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in USA using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in Canada using our contact Information or the inquiry submission form. Connect effortlessly with TechDemocracy’s delivery center in Philippines using our contact Information or the inquiry submission form." },
      { name: 'keywords', content: "Contact information, Inquiry form, Contact details, Reach out, Inquiry submission, India office, Techdemocracy India, Cotelligent, enquiries, Contact form, Get connected, Customer support, Reach us, Connect with us. Techdemocracy delivery center, Canada delivery center, Contact information, Inquiry form, Contact details, Inquiry submission, Canada office, Techdemocracy Canada, enquiries, Contact form, Get connected, Customer support, Reach us, Connect with us, Contact support, Message us, Enquiry form, Customer service. Philippines office, Contact information, Inquiry form, Contact details, Reach out, Inquiry submission, enquiries, Get connected, Customer support, Reach us, Connect with us, Contact support, Message us, Enquiry form, TechdemocracyPhilippines" }]
    );
  }
}
