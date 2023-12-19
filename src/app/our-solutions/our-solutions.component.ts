import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";


@Component({
  selector: 'our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OurSolutionsComponent implements OnInit {

  constructor (private readonly router: Router, 
    private readonly location: Location) {}
  ngOnInit() {
    AOS.init();
  }

  navToPages(pageName: string, title?: any, isResourcePage?: boolean) {
    if (title && !isResourcePage) {
      if (title === 'Identity Governance & Administration' || title === 'Customer Identity & Access Management' || title === 'Previliged Access Management' || title === 'Access Management' || title === 'Manage SOC') {
        this.router.navigate(['/solutions'], { queryParams: { prop: title } });
        this.location.replaceState('/solutions');
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      this.router.navigate([pageName], { queryParams: { prop: title }, skipLocationChange: true });
      this.location.replaceState(pageName);
    }

  }
}
