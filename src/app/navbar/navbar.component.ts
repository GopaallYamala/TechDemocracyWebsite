import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDefinitions } from 'src/shared/animations';
import { Location } from '@angular/common';
import { TDCGeoLocationService } from 'src/shared/services/geo-location.service';

@Component({
  selector: 'top-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class NavBarComponent implements OnInit {

  isMenuCollapsed: boolean = false;
  displayCreateMenu: boolean = false;
  solutionsMenu: boolean = false;
  resourcesMenu: boolean = false;



  // Geo location variables
  ipaddress: string = '';
  latitude: string = '';
  longitude: string = '';
  currency: string = '';
  currencysymbol: string = '';
  isp: string = '';
  city: string = '';
  country: string = '';
  province: string = '';
  selectedResourceType: string = "All";
  isCollapsed:boolean = true;

  constructor(private readonly router: Router,
    private location: Location,
    private readonly geoLocationService: TDCGeoLocationService) {

  }

  ngOnInit() {
    this.geoLocationService.getIpAddress().subscribe(resp => {
      console.log(resp, 'geo location response-----------');
      this.ipaddress = resp['ip'];
      this.geoLocationService.getGEOLocation(this.ipaddress).subscribe(res => {
        console.log(res);
        this.latitude = res['latitude'];
        this.longitude = res['longitude'];
        this.city = res['city'];
        this.country = res['country_code2'];
        this.isp = res['isp'];
        this.province = res['state_prov']
      })
    })
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

  resourcesObj = [
    {
      tittle: 'All',
    },
    {
      tittle: 'Case Study',
      caseStudys: [
        {
          tittle: 'Customer Identity & Access Management',
        },
        {
          tittle: 'Customer Identity & Access Management',
        },
        {
          tittle: 'Customer Identity & Access Management',
        }
      ]
    },
    {
      tittle: 'Customer Success',
    },
    {
      tittle: 'Online Journal',
    },
    {
      tittle: 'WhitePapers',
    },
    {
      tittle: 'Events & Videos',
    },
    {
      tittle: 'Reports',
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

  // displayMenu () {
  //   this.isMenuCollapsed = !this.isMenuCollapsed;
  // }

  showSolutionsNav() {
    this.solutionsMenu = !this.solutionsMenu;
    this.displayCreateMenu = false;
    this.resourcesMenu = false;
  }

  showServicesNav() {
    this.solutionsMenu = false;
    this.resourcesMenu = false;
    this.displayCreateMenu = !this.displayCreateMenu;
  }
  showResourcesNav() {
    this.solutionsMenu = false;
    this.displayCreateMenu = false;
    this.resourcesMenu = !this.resourcesMenu;
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

  navToPages(pageName: string, title?: any, isResourcePage?: boolean) {
    if (title && !isResourcePage) {
      if (title === 'Identity Governance & Administration' || title === 'Customer Identity & Access Management' || title === 'Previliged Access Management' || title === 'Access Management') {
        this.router.navigate(['/solutions'], { queryParams: { prop: title }, skipLocationChange: true });
        this.location.replaceState('/solutions');
      }
      else if (title === 'Advisory Consulting' || title === 'Implementation Service' || title === 'Operations & Support' || title === 'Manage Services') {
        this.router.navigate(['/adv-consulting'], { queryParams: { prop: title }, skipLocationChange: true });
        this.location.replaceState('/adv-consulting');
      }
      else {
        this.router.navigate(['/home']);
      }
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

  }

  resourceType(type: string) {
    this.selectedResourceType = type;
  }


}
