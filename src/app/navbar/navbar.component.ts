import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDefinitions } from 'src/shared/animations';

@Component({
  selector: 'top-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class NavBarComponent {

  isMenuCollapsed: boolean = false;
  displayCreateMenu: boolean = false;
  solutionsMenu: boolean = false;

  constructor(private readonly router: Router) {

  }

  solutionsObj = [{
    tittle: 'Identity Governance & Administration',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Customer Identity & Access Management',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Previliged Access Management',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Access Management',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Manage SOC',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  }]

  servicesObj = [
    {
      tittle: 'Advisory Consulting',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Implementation Service',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Operations & Support',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Manage Services',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    }
  ]

  showMenu(id: string) {
    let element = document.getElementById(id) as HTMLElement;
    element.style.visibility = 'visible';
  }

  hideMenu(id: string) {
    let element = document.getElementById(id) as HTMLElement;
    element.style.visibility = 'hidden';
  }

  showSolutionsNav() {
    this.solutionsMenu = !this.solutionsMenu;
    this.displayCreateMenu = false;
  }

  showServicesNav() {
    this.solutionsMenu = false;
    this.displayCreateMenu = !this.displayCreateMenu;
  }
  // previous method
  navToPages1(pageName: string, title?: any) {

    if (title) {

      switch (title) {
        case 'Identity Governance & Administration':
          this.router.navigate(['/solution-iga']);
          break;
        case 'Customer Identity & Access Management':
          this.router.navigate(['/solution-ciam']);
          break;
        case `Previliged Access Management`:
          this.router.navigate(['/solution-pam']);
          break;
        case `Access Management`:
          this.router.navigate([`/solution-am`]);
          break;
        case `Advisory Consulting`:
          this.router.navigate([`/adv-consulting`]);
          break;
        case `Implementation Service`:
          this.router.navigate([`/impl-services`]);
          break;
        case `Operations & Manage Services`:
          this.router.navigate([`/ops-manage-services`]);
          break;
        default:
          break;
      }
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
    } else {
      this.router.navigate([pageName]);
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
    }

  }

  navToPages(pageName: string, title?: any) {
    if (title) {
      switch (title) {
        case 'Identity Governance & Administration':
          this.router.navigate(['/solutions'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case 'Customer Identity & Access Management':
          this.router.navigate(['/solutions'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Previliged Access Management`:
          this.router.navigate(['/solutions'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Access Management`:
          this.router.navigate(['/solutions'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Advisory Consulting`:
          this.router.navigate(['/adv-consulting'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Implementation Service`:
          this.router.navigate(['/adv-consulting'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Operations & Support`:
          this.router.navigate(['/adv-consulting'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        case `Manage Services`:
          this.router.navigate(['/adv-consulting'], { queryParams: { prop: title }, skipLocationChange: true });
          break;
        default:
          break;
      }
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
    } else {
      this.router.navigate([pageName]);
      this.displayCreateMenu = false;
      this.solutionsMenu = false;
    }

  }


}
