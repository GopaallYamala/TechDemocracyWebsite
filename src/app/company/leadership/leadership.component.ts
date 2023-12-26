import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTags([
      {name: 'title', content: "TechDemocracy’s Team | Executive Leadership Team"},
      { name: 'description', content: "Discover TechDemocracy's leadership team shaping cybersecurity solutions. Learn about our advisory consulting, managed services & identity security expertise." },
      { name: 'keywords', content: "Techdemocracy Leadership Team, cybersecurity transformation journey, cybersecurity solutions, advisory consulting services, security software implementation, managed service solutions, Identity Security, Cyber Risk and Governance" }]
    );
  }

}
