import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";


@Component({
  selector: 'consultation-component',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class ConsultationComponent implements OnInit {
  ngOnInit () {
    AOS.init();
  }
}
