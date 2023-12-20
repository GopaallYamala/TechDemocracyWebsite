import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'identity-secure-solution',
  templateUrl: './identity-secure-solution.component.html',
  styleUrls: ['./identity-secure-solution.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})

export class IdentitySecureSolutionComponent implements OnInit {

  constructor (private readonly router: Router, 
    private location: Location,
    ) {}

  ngOnInit() {
    AOS.init();
  }

  navToPages(pageName: string, title?: any, isResourcePage?: boolean) {
    if (title && !isResourcePage) {
      if (title === 'Identity Governance & Administration' || title === 'Customer Identity & Access Management' || title === 'Previliged Access Management' || title === 'Access Management' || title === 'Manage SOC') {
        this.router.navigate(['/solutions'], { queryParams: { prop: title } });
        this.location.replaceState('/solutions');
      } else if (title === 'Advisory Consulting' || title === 'Implementation Service' || title === 'Operations & Support' || title === 'Manage Services') {
        this.router.navigate(['/adv-consulting'], { queryParams: { prop: title } });
        this.location.replaceState('/adv-consulting');
      } else if (title === 'Contact us' || title === 'About us' || title === 'Leadership' || title === 'Careers' || title === 'News' || title === 'Testimonials') {
        this.router.navigate(['/company'], { queryParams: { prop: title } });
        this.location.replaceState('/company');
      } else {
        this.router.navigate(['/home']);
      }
      // this.companyMenu = false;
      // this.displayCreateMenu = false;
      // this.solutionsMenu = false;
      // this.resourcesMenu = false;
    } else {
      this.router.navigate([pageName], { queryParams: { prop: title }, skipLocationChange: true });
      this.location.replaceState(pageName);
      // this.displayCreateMenu = false;
      // this.solutionsMenu = false;
      // this.resourcesMenu = false;
    }

  }

}
