import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";
import { Router } from '@angular/router';


@Component({
  selector: 'consultation-component',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class ConsultationComponent implements OnInit {
  
  constructor (private readonly router: Router) {}
  
  ngOnInit () {
    AOS.init();
  }

  talkToExpert () {
    this.router.navigate(['/company'], { queryParams: { prop: 'Contact us' } });
  }
}
