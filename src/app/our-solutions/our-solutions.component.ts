import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurSolutionsComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
