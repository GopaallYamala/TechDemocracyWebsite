import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/app/shared/animations';



@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class FooterComponent {

  constructor() {

  }

}
