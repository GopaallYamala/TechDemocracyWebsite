import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from '../../shared/animations';
import AOS from "aos";

@Component({
  selector: 'accelerators-utilities',
  templateUrl: './accelerators-utilities.compoent.html',
  styleUrls: ['./accelerators-utilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class AcceleratorsUtilitiesComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
