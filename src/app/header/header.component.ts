import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { UtilService } from 'src/shared/services/util.service';




@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class HeaderComponent {

  constructor(private readonly utilService: UtilService) { }

  displayCreateMenu: boolean = false;
  selectedState = "United States";
  // quickActions: string[];
  quickActions = ['United States', 'India', 'Canada'];
  selectAction(action: any) {
    this.selectedState = action;
    this.displayCreateMenu = false;
    this.utilService.passValue(action);
  }
  quickSelect() {
    this.displayCreateMenu = !this.displayCreateMenu;
  }
}
