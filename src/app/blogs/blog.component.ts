import { Component } from "@angular/core";
import { StrapiService } from "src/shared/services/strapi.service";

@Component({
  selector: 'blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {

  strapiBlogAttrs: any;
  contextType: string = 'All'

  constructor(private readonly strapiService: StrapiService) { }


  ngOnInit() {
    this.getStrapiBlog();
  }


  getStrapiBlog() {
    this.strapiService.getBlog().subscribe((resp) => {
      // console.log(resp, '------------Blog');
      const data = resp.data;
      console.log(data, '------------data');
      this.strapiBlogAttrs = data[0].attributes;
      console.log(this.strapiBlogAttrs, '------------attr');

    })
  }

}
