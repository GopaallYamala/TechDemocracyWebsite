import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { TDCGeoLocationService } from 'src/shared/services/geo-location.service';



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
  province: string = '';

  constructor(private readonly geoLocationService: TDCGeoLocationService) {

  }

  ngOnInit () {
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
}
