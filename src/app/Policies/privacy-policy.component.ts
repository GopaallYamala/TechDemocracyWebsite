import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';

import AOS from "aos";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class PrivacyPolicyComponent implements OnInit {
    
  constructor (private meta: Meta) {}
  ngOnInit () {
    this.meta.addTags([
      {name: 'title', content: "TechDemocracy Privacy Policy | User Privacy Terms"},
      { name: 'description', content: "Discover how TechDemocracy ensures security with our Privacy Compliance Terms and Personal Information Policy." },
      { name: 'keywords', content: "Data Protection Policy, Online Privacy Guidelines, Personal Information Policy, Privacy Compliance Terms, Security and Privacy Measures, Data Privacy Regulations, Privacy Statement Updates" }]
    );
  }
}