import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';

import AOS from "aos";


@Component({
  selector: 'potential-differentiator',
  templateUrl: './potential-differentiator.component.html',
  styleUrls: ['./potential-differentiator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class PotentialDifferentiatorComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
  @Input() potentialDiffObj: any = {
    hdng: `IGA Features and Capabilities`,
    content: `We recognize that the intricate dance between user access, compliance, and security is more crucial than ever and need these capabilities:`,
    featuresObj: [
      {
        title: `Identity life cycle management`,
        info: ``,
        icon: ``
      },
      {
        title: `User Provisioning and Deprovisioning`,
        info: ``,
        icon: ``
      },
      {
        title: `Access Certiﬁcation`,
        info: ``,
        icon: ``
      },
      {
        title: `Certify User Access`,
        info: ``,
        icon: ``
      },
      {
        title: `Access Request`,
        info: ``,
        icon: ``
      },
      {
        title: `Segregation of Duties (SOD)`,
        info: ``,
        icon: ``
      }
    ]
  }

}
