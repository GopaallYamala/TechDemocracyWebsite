import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { TDCGeoLocationService } from 'src/shared/services/geo-location.service';
import { UtilService } from 'src/shared/services/util.service';

import AOS from "aos";


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

  constructor(private readonly geoLocationService: TDCGeoLocationService, private readonly utilService: UtilService) {

  }

  ngOnInit() {
    AOS.init();

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
}
