import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tdc-adv-consultant',
  templateUrl: './tdc-adv-consultant.component.html',
  styleUrls: ['./tdc-adv-consultant.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TDCforConsultantComponent {
  @Input() tdcConsultantObj: any = {
    heading: ``,
    content: ``
  }
}
