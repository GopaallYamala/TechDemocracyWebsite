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
    hdng: ``,
    content: ``,
    featuresObj: [
      {
        title: ``,
        info: ``
      }
    ]
  }

}
