import { Component, OnInit } from '@angular/core'
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StrapiService } from 'src/shared/services/strapi.service';
import { ResourceService } from './shared/resources.service';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  strapiBlogAttrs: any;
  contextType: string = 'All'
  resourceList: any;
  resourceStringObj: any;
  resourceObj: any;
  categoriesList: any;
  strapiContextUrl: any;

  constructor(private readonly strapiService: StrapiService,
    private readonly resourceService: ResourceService,
    private readonly activatedRoute: ActivatedRoute,
    private meta: Meta) { }




  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop) {
        this.contextType = query.prop;
      }
    });
    this.meta.addTags([
      { name: 'title', content: "TechDemocracy Blog | Cybersecurity, Risk Solutions & IAM Updates" },
      { name: 'description', content: "Stay informed with TechDemocracy Cybersecurity Blog. Get insights into Identity Management, CyberRisk Solutions & Threat Intelligence for effective Cyberdefense." },
      { name: 'keywords', content: "Cybersecurity insights, Identity management blog, CyberRisk solutions posts, IAM solutions blog, Security tips and tricks, Data protection articles, Threat intelligence blog, Cyber defense strategies, Identity and access management updates, Security best practices, IT security blogs, Cyber threat analysis, Cyber awareness articles" }]
    );
    this.getResources();
    this.getCategorys();
    this.strapiContextUrl = this.strapiService.strapiContextUrl;
  }

  getResources() {
    this.strapiService.getBlog().subscribe(res => {
      const myJSON = JSON.stringify(res.data);
      // let sample = res.data[0];
      // document.getElementById("DynamicData").innerHTML = sample.attributes.ArticleEditContent;
      this.resourceObj = myJSON;
    });
  }

  getCategorys() {
    let categories = [];
    this.categoriesList = undefined;
    this.strapiService.getCategory().subscribe(res => {
      categories.push("All");
      console.log("Categorys", res);
      let data = res.data;
      data.forEach(categorie => {
        if (categorie) {
          categories.push(categorie.attributes.CategoryTitle);
        }
      });
      this.categoriesList = categories;
    })
  }

  getStrapiResources() {
    this.strapiService.getFullBlog().subscribe(res => {
      this.resourceList = res.data;
      const myJSON = JSON.stringify(this.resourceList);
      this.resourceStringObj = myJSON;
      this.getAllResources();
    });
  }

  getAllResources() {
    this.resourceService.getAllResources().subscribe(res => {
      this.resourceObj = res.resources;
      if (res.resources.length === 0) {
        this.saveStrapiJson();
      }
      if (res.resources[0].resourceJson.includes(this.resourceStringObj)) {
        console.log(">>>>>>>>>> No Change <<<<<<<<<<<<");
      }
      else {
        console.log(">>>>>>>>>> Yes, Changed <<<<<<<<<<<<");
        res.resources[0].resourceJson = this.resourceStringObj;
        let json = {
          _id: res.resources[0]._id,
          resourceJson: this.resourceStringObj
        }
        this.updateResource(res.resources[0]._id, json);
      }
    })
  }

  saveStrapiJson() {
    const myJSON = JSON.stringify(this.resourceList);
    let json = {
      jsonObject: myJSON,
    }
    this.resourceService.saveStrapiJson(json).subscribe(res => {
      console.log(res);
    })
  }

  updateResource(id, json) {
    this.resourceService.updateResource(id, json).subscribe(res => {
      this.getAllResources();
    })
  }

  removeResource(id) {
    this.resourceService.deleteResource(id).subscribe(res => {
      console.log(res);
    })
  }

}
