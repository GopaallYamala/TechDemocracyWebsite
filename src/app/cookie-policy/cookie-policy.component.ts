import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
	selector: 'cookie-policy',
	templateUrl: './cookie-policy.component.html',
	styleUrls: ['./cookie-policy.component.scss']
})

export class CookiePolicyComponent implements OnInit {

	constructor(private meta: Meta) { }

	ngOnInit () {
		this.meta.addTags([
      {name: 'title', content: "TechDemocracy Cookie Policy | Cookie Usage Policy"},
      { name: 'description', content: "Review our Cookie Policy, including information on cookies, tracking, and compliance guidelines for privacy and security measures." },
      { name: 'keywords', content: "Website Cookies Information, Cookie Tracking Regulations, Privacy and Cookie Policy, Cookies Data Protection, Cookie Consent Guidelines, Cookie Settings Update, Cookie Policy Compliance, Cookie Security Measures" }]
    );
	}

}