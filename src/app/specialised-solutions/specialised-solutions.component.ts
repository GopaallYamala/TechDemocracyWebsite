import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/app/shared/animations';



@Component({
  selector: 'specialised-solutions',
  templateUrl: './specialised-solutions.component.html',
  styleUrls: ['./specialised-solutions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class SpecialisedSolutionsComponent {

  constructor() {

  }

}
