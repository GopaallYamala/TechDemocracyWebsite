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

  constructor (private readonly router: Router) {

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
      tittle: 'Operations & Manage Services',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
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

  navToPages (pageName: string) {
    this.router.navigate([pageName]);
    this.displayCreateMenu = false;
    this.solutionsMenu = false;
  }

}
