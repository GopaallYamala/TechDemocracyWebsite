import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tdc-right-partner',
  templateUrl: './tdc-right-partner.component.html',
  styleUrls: ['./tdc-right-partner.component.scss']
})

export class TDCRightPartnerComponent {

  constructor (private readonly router: Router) {}

  talkToExpert () {
    this.router.navigate(['/company'], { queryParams: { prop: 'Contact Us' } });
  }
}
