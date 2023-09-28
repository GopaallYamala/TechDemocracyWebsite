import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';



@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class HeaderComponent {

  displayCreateMenu: boolean = false;
  selectedState = "United States";
  // quickActions: string[];
  quickActions = ['United States', 'India', 'Canada', 'Philippines'];
  selectAction(action: any) {
    this.selectedState = action;
    this.displayCreateMenu = false;
  }
  quickSelect() {
    this.displayCreateMenu = !this.displayCreateMenu;
  }
}
