import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'


@Component({
  selector: 'highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class ResourcesHighlightsComponent implements OnInit, OnChanges {

  @Input() resourceObj: any;
  resourceJson: any;

  constructor() { }


  ngOnInit() {
    console.log(this.resourceObj);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.resourceJson = JSON.parse(this.resourceObj[0].resourceJson);
      console.log(this.resourceJson);
    }
  }

}
