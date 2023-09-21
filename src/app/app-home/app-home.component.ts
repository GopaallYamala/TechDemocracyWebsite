import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: AnimationDefinitions
})

export class AppHomeComponent {

}
