import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';



@Component({
  selector: 'potential-differentiator',
  templateUrl: './potential-differentiator.component.html',
  styleUrls: ['./potential-differentiator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class PotentialDifferentiatorComponent {

  @Input() potentialDiffObj: any = {
    hdng: `IGA Features and Capabilities`,
    content: `We recognize that the intricate dance between user access, compliance, and security is more crucial than ever and need these capabilities:`,
    featuresObj: [
      {
        title: `Identity life cycle management`,
        info: ``
      },
      {
        title: `User Provisioning and Deprovisioning`,
        info: ``
      },
      {
        title: `Access Certiﬁcation`,
        info: ``
      },
      {
        title: `Certify User Access`,
        info: ``
      },
      {
        title: `Access Request`,
        info: ``
      },
      {
        title: `Segregation of Duties (SOD)`,
        info: ``
      }
    ]
  }

}
