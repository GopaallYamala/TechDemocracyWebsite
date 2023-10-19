import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent implements OnInit {
  testimonialsData: any = [];

  ngOnInit () {
    this.testimonialsData = [
      {
        tContent: 'TechDemocracy has been an invaluable partner for T-Mobile With TechDemocracy we believe we have built one of the industry leading IGA platforms. We are in sync as if they knew what I was thinking before I was thinking it. They have a RoadMap for my RoadMap.',
        tClientImg: '../../assets/images/T-Mobile.JPG',
        tRole: 'Security Consult Advisory Manager'
      },
      {
        tContent: 'TechDemocracy has been an invaluable partner for T-Mobile With TechDemocracy we believe we have built one of the industry leading IGA platforms. We are in sync as if they knew what I was thinking before I was thinking it. They have a RoadMap for my Security of my Business.',
        tClientImg: '../../assets/images/T-Mobile.JPG',
        tRole: 'Senior Solutions Consultant'
      }
    ]
  }
}