import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'leadership-banner',
  templateUrl: './leadership-banner.component.html',
  styleUrls: ['./leadership-banner.component.scss']
})

export class LeadershipBannerComponent {

  isCollapsed: boolean = true;

  displayCreateMenu: boolean = false;
  solutionsMenu: boolean = false;
  resourcesMenu: boolean = false;
  companyMenu: boolean = false;

  constructor (private readonly router: Router,
    private location: Location,) {}

  navToPages(pageName: string, title?: any, isResourcePage?: boolean) {
    if (title && !isResourcePage) {
      if (title === 'Identity Governance & Administration' || title === 'Customer Identity & Access Management' || title === 'Previliged Access Management' || title === 'Access Management' || title === 'Manage SOC') {
        this.router.navigate(['/solutions'], { queryParams: { prop: title } });
        this.location.replaceState('/solutions');
      } else if (title === 'Advisory Consulting' || title === 'Implementation Service' || title === 'Operations & Support' || title === 'Manage Services') {
        this.router.navigate(['/adv-consulting'], { queryParams: { prop: title } });
        this.location.replaceState('/adv-consulting');
      } else if (title === 'Contact Us' || title === 'About Us' || title === 'Leadership' || title === 'Careers' || title === 'News' || title === 'Testimonials') {
        this.router.navigate(['/company'], { queryParams: { prop: title } });
        this.location.replaceState('/company');
      } else {
        this.router.navigate(['/home']);
      }
      this.companyMenu = false;
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
      this.resourcesMenu = false;
    } else {
      this.router.navigate([pageName], { queryParams: { prop: title }, skipLocationChange: true });
      this.location.replaceState(pageName);
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
      this.resourcesMenu = false;
    }
    this.isCollapsed = true;
    const navIcons = document.querySelectorAll<HTMLElement>('#ham-menu-icon');
    if (document.getElementById('ham-menu-icon').classList.contains('open')) {
      document.getElementById('ham-menu-icon').classList.remove('open');  
    } else {
      document.getElementById('ham-menu-icon').classList.add('open');
    }
  }
}
