import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';


@Component({
  selector: 'top-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class NavBarComponent {

  isMenuCollapsed: boolean = false;

}
