import { Component, OnInit } from '@angular/core'
import { StrapiService } from 'src/shared/services/strapi.service';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  strapiBlogAttrs: any;
  constructor (private readonly strapiService: StrapiService) {}
  ngOnInit() {
    this.freeConsult();
  }

  
  freeConsult () {
    this.strapiService.getBlog().subscribe((resp) => {
      // console.log(resp, '------------Blog');
      const data = resp.data;
      console.log(data, '------------data');
      this.strapiBlogAttrs = data[0].attributes;
      console.log(this.strapiBlogAttrs, '------------attr');

    })
  }
}
