import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { TDCGeoLocationService } from 'src/shared/services/geo-location.service';
import { UtilService } from 'src/shared/services/util.service';

import AOS from "aos";
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class FooterComponent implements OnInit {

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

  constructor(private readonly geoLocationService: TDCGeoLocationService, 
    private readonly utilService: UtilService, 
    private readonly router: Router, 
    private readonly location: Location) {

  }

  ngOnInit() {
    AOS.init({
      startEvent: 'load',
    });

    this.utilService.dataState.subscribe(
      (data: string) => {
        this.country = data;
      });
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
    } else {
      this.router.navigate([pageName], { queryParams: { prop: title }, skipLocationChange: true });
      this.location.replaceState(pageName);
    }

  }
}
