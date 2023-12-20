import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";
import { Location } from '@angular/common';
import { TDCGeoLocationService } from 'src/shared/services/geo-location.service';
import { UtilService } from 'src/shared/services/util.service';

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
  companyMenu: boolean = false;



  // Geo location variables
  ipaddress: string = '';
  latitude: string = '';
  longitude: string = '';
  currency: string = '';
  currencysymbol: string = '';
  isp: string = '';
  city: string = '';
  country: string = '';
  countryCode: string = '';
  province: string = '';
  selectedResourceType: string = "All";
  isCollapsed: boolean = true;

  toggleNavbar: boolean = true;

  toggleSubMenus: boolean = true;
  displaySolutionsMenu: boolean = false;
  displayServicesMenu: boolean = false;
  displayCompanyMenu: boolean = false;

  constructor(private readonly router: Router,
    private location: Location,
    private readonly geoLocationService: TDCGeoLocationService,
    private readonly utilService: UtilService) {

  }

  ngOnInit() {
    AOS.init();
    this.utilService.dataState.subscribe(
      (data: string) => {
        this.country = data;
      }
    )
    // this.geoLocationService.getIpAddress().subscribe(resp => {
    //   console.log(resp, 'geo location response-----------');
    //   this.ipaddress = resp['ip'];
    //   this.geoLocationService.getGEOLocation(this.ipaddress).subscribe(res => {
    //     console.log(res);
    //     this.latitude = res['lat'];
    //     this.longitude = res['long'];
    //     this.city = res['city'];
    //     this.country = res['country'];
    //     this.countryCode = res['countryCode'];
    //     this.isp = res['isp'];
    //     this.province = res['regionName']
    //   })
    // })
  }

  solutionsObj = [{
    tittle: 'Identity Governance & Administration',
    desc: 'TechDemocracy\'s Identity Governance optimizes security by efficiently handling user access and rights.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Customer Identity & Access Management',
    desc: 'Trust TechDemocracy\'s CIAM for robust protection and management of customer identities.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Previliged Access Management',
    desc: 'Elevate security layers with TechDemocracy\'s Privileged Access Management for critical accounts.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Access Management',
    desc: 'TechDemocracy\'s Access Management offers precise and efficient user access control.',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  },
  {
    tittle: 'Manage SOC',
    desc: 'TechDemocracy\'s Managed SOC ensures proactive threat detection and monitoring',
    stories: 'Success stories',
    approch: 'Our Approach',
    customise: 'Customise Solutions',
  }]

  servicesObj = [
    {
      tittle: 'Advisory Consulting',
      desc: 'Our advisory services go beyond the obvious, assuring a thorough examination that builds the framework for a successful digital transition.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Implementation Service',
      desc: 'The commitment of TechDemocracy to bespoke solutions ensures that the implementation completely corresponds with your business goals.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Operations & Support',
      desc: 'With proactive security measures to back it up, TechDemocracy\'s round-the-clock support guarantees that your business runs smoothly.',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      tittle: 'Manage Services',
      desc: 'The managed services provided by TechDemocracy guarantee continual progress rather than just status quo maintenance.',
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

  companyMenuData = [
    {
      title: 'About us',
      desc: 'Your Trusted Security Partner',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      title: 'Leadership',
      desc: 'Meet the Masters of Security',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      title: 'Careers',
      desc: 'Explore Opportunities in TechDemocracy',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    },
    {
      title: 'Contact us',
      desc: 'Talk to Our Cyber Consultants',
      businessModel: 'Business Model',
      stories: 'Customer Success Stories',
    }
    // {
    //   title: 'News',
    //   desc: 'Updates from the Cyber World',
    //   businessModel: 'Business Model',
    //   stories: 'Customer Success Stories',
    // }
    // {
    //   title: 'Testimonials',
    //   desc: 'Customer Reviews & Feedback',
    //   businessModel: 'Business Model',
    //   stories: 'Customer Success Stories',
    // }
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
    this.companyMenu = false;
  }

  showServicesNav() {
    this.solutionsMenu = false;
    this.resourcesMenu = false;
    this.companyMenu = false;
    this.displayCreateMenu = !this.displayCreateMenu;
  }

  showResourcesNav() {
    this.solutionsMenu = false;
    this.displayCreateMenu = false;
    this.companyMenu = false;
    this.resourcesMenu = !this.resourcesMenu;
  }

  showCompanyMenu() {
    this.solutionsMenu = false;
    this.displayCreateMenu = false;
    this.resourcesMenu = false;
    this.companyMenu = !this.companyMenu;
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

  }

  resourceType(type: string) {
    this.selectedResourceType = type;
  }

  toggleHam (item) {
    if (item === 'solutions') {
      this.displaySolutionsMenu = true;
      this.displayServicesMenu = false;
      this.displayCompanyMenu = false;
    } else if (item === 'services') {
      this.displaySolutionsMenu = false;
      this.displayServicesMenu = true;
      this.displayCompanyMenu = false;
    } else if (item === 'company') {
      this.displaySolutionsMenu = false;
      this.displayServicesMenu = false;
      this.displayCompanyMenu = true;
    }
  }





}
