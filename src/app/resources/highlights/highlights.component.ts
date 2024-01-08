import { Location } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router';



@Component({
  selector: 'highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class ResourcesHighlightsComponent implements OnInit, OnChanges {

  @Input() resourceObj: any;
  resourceJson: any;
  @Input() strapiContextUrl: any;


  constructor(private readonly router: Router, private readonly location: Location) { }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (this.resourceObj) {
        this.resourceJson = JSON.parse(this.resourceObj);
      }
    }
  }


  open(resource) {
    if (resource) {
      let data = {
        slug: resource.attributes.Slug,
        id: resource.id
      }
      this.router.navigate(['/blogs', { data: JSON.stringify(data) }]);
    }
  }

  // open(id) {
  //   let index = this.resourceJson.map(res => res.id).indexOf(id);
  //   if (index !== -1) {
  //     this.router.navigate(['/blogs', { data: JSON.stringify(this.resourceJson[index]), skipLocationChange: true }]);
  //     // setTimeout(() => {
  //     //   this.location.replaceState('/blogs');
  //     // }, 100);
  //   }
  // }

}
