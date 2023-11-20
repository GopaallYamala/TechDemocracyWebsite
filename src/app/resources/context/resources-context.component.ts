import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resources-context',
  templateUrl: './resources-context.component.html',
  styleUrls: ['./resources-context.component.scss']
})
export class ResourcesContextComponent implements OnInit {

  @Input() contextType: string;

  upcomingEvents = [1, 2, 3, 4, 5, 6];
  latestVideos = [{ type: "webinar" }, { type: "Firechart" }, { type: "Event" }, { type: "webinar" }, { type: "Firechart" }, { type: "Event" }, { type: "webinar" }, { type: "Firechart" }, { type: "Event" }];

  latestVideosIndex: number = 6;
  upcomingEventIndex: number = 3;

  listOfUsers = [{ role: 'Panelist', name: 'Divyansh Chavan', designation: 'Chief Technology Officer' }, { role: 'Panelist', name: 'Manohar Ram', designation: 'Accounting Supervisor' }, { role: 'Panelist', name: 'Ninarika Sengupta', designation: 'Product Developer' }, { role: 'Moderator', name: 'Nayan Bhavsar', designation: 'Cloud System Adminstrator' }]


  ngOnInit() {

  }

  viewAllVideos() {
    this.latestVideosIndex = this.latestVideos.length;
  }

  viewUpcomingEvent() {
    this.upcomingEventIndex = this.upcomingEvents.length;
  }



}
