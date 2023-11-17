import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { StrapiService } from 'src/shared/services/strapi.service';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  strapiBlogAttrs: any;
  contextType: string = 'All'

  constructor(private readonly strapiService: StrapiService,
    private readonly activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop) {
        this.contextType = query.prop;
      }
    });
    this.freeConsult();
  }


  freeConsult() {
    this.strapiService.getBlog().subscribe((resp) => {
      // console.log(resp, '------------Blog');
      const data = resp.data;
      console.log(data, '------------data');
      this.strapiBlogAttrs = data[0].attributes;
      console.log(this.strapiBlogAttrs, '------------attr');

    })
  }
}
