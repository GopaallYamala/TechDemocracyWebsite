import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'resources-context',
  templateUrl: './resources-context.component.html',
  styleUrls: ['./resources-context.component.scss']
})
export class ResourcesContextComponent implements OnInit, OnChanges {

  @Input() contextType: string;
  @Input() resourceObj: any;
  resourceJson: any;
  @Input() strapiContextUrl: any;

  upcomingEvents = [1, 2, 3, 4, 5, 6];
  latestVideos = [{ type: "webinar" }, { type: "Firechart" }, { type: "Event" }, { type: "webinar" }, { type: "Firechart" }, { type: "Event" }, { type: "webinar" }, { type: "Firechart" }, { type: "Event" }];

  latestVideosIndex: number = 6;
  upcomingEventIndex: number = 3;

  listOfUsers = [{ role: 'Panelist', name: 'Divyansh Chavan', designation: 'Chief Technology Officer' }, { role: 'Panelist', name: 'Manohar Ram', designation: 'Accounting Supervisor' }, { role: 'Panelist', name: 'Ninarika Sengupta', designation: 'Product Developer' }, { role: 'Moderator', name: 'Nayan Bhavsar', designation: 'Cloud System Adminstrator' }]


  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log(this.resourceObj);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.resourceJson = JSON.parse(this.resourceObj[0].resourceJson);
    }
  }

  viewAllVideos() {
    this.latestVideosIndex = this.latestVideos.length;
  }

  viewUpcomingEvent() {
    this.upcomingEventIndex = this.upcomingEvents.length;
  }

  open(id) {
    let index = this.resourceJson.map(res => res.id).indexOf(id);
    if (index !== -1) {
      this.router.navigate(['/blogs', { data: JSON.stringify(this.resourceJson[index]), skipLocationChange: true }]);
    }
  }

}
