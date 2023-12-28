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

  constructor(private readonly router: Router) { }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.resourceJson = JSON.parse(this.resourceObj);
      console.log(this.resourceJson);
    }
  }

  open(id) {
    let index = this.resourceJson.map(res => res.id).indexOf(id);
    if (index !== -1) {
      this.router.navigate(['/blogs', { data: JSON.stringify(this.resourceJson[index]), skipLocationChange: true }]);
    }
  }

}
