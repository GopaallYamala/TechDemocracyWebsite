import { Component, OnInit } from '@angular/core'
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

  constructor(private readonly strapiService: StrapiService,
    private readonly resourceService: ResourceService,
    private readonly activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop) {
        this.contextType = query.prop;
      }
    });
    this.getStrapiResources();
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
