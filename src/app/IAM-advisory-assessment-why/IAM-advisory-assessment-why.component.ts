import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'IAM-advisory-assessment-why',
  templateUrl: './IAM-advisory-assessment-why.component.html',
  styleUrls: ['./IAM-advisory-assessment-why.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class IAMAdvisoryAssessmentWhyComponent {
  @Input() advAssmtObj: any = {
    heading: '',
    list: [
     {
      hdng: '',
      content: ''
     },
     {
      hdng: '',
      content: ''
     },
     {
      hdng: '',
      content: ''
     }
    ]
  }

}
