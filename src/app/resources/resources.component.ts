import { Component, OnInit } from '@angular/core'
import { Meta } from '@angular/platform-browser';
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
    private readonly activatedRoute: ActivatedRoute, 
    private meta: Meta) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop) {
        this.contextType = query.prop;
      }
    });
    this.freeConsult();
    this.meta.addTags([
      {name: 'title', content: "TechDemocracy Blog | Cybersecurity, Risk Solutions & IAM Updates"},
      { name: 'description', content: "Stay informed with Techdemocracy Cybersecurity Blog. Get insights into Identity Management, CyberRisk Solutions & Threat Intelligence for effective Cyberdefense." },
      { name: 'keywords', content: "Cybersecurity insights, Identity management blog, CyberRisk solutions posts, IAM solutions blog, Security tips and tricks, Data protection articles, Threat intelligence blog, Cyber defense strategies, Identity and access management updates, Security best practices, IT security blogs, Cyber threat analysis, Cyber awareness articles" }]
    );
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
