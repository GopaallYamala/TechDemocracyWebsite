import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/app/shared/animations';



@Component({
  selector: 'consultation-component',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class ConsultationComponent {

}
