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
      content: '',
      icon: '../../assets/images/Icons/IconEndtoEndSupport.svg'
     },
     {
      hdng: '',
      content: '',
      icon: '../../assets/images/Icons/IconFederationSAMLOAuthOpenIDConnect.svg'
     },
     {
      hdng: '',
      content: '',
      icon: '../../assets/images/Icons/IconEndtoEndSupport.svg'
     }
    ]
  }

}
