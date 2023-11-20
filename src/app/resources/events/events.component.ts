import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  upcomingEvents = [1, 2, 3, 4, 5, 6];
  latestVideos = [1, 2, 3, 4, 5, 6, 7, 8];

  latestVideosIndex: number = 3;
  upcomingEventIndex: number = 3


  ngOnInit() {

  }

  viewAllVideos() {
    this.latestVideosIndex = this.latestVideos.length;
  }

  viewUpcomingEvent() {
    this.upcomingEventIndex = this.upcomingEvents.length;
  }

}
