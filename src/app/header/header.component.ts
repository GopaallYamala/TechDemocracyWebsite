import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { UtilService } from 'src/shared/services/util.service';




@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class HeaderComponent implements OnInit {

  displayCreateMenu: boolean = false;
  selectedState = "United States";
  quickActions = ['United States', 'India', 'Canada'];

  constructor(private readonly utilService: UtilService) { }

  ngOnInit() {
    this.utilService.passValue(this.selectedState);
  }

  selectAction(action: any) {
    this.selectedState = action;
    this.displayCreateMenu = false;
    this.utilService.passValue(this.selectedState);
  }

  quickSelect() {
    this.displayCreateMenu = !this.displayCreateMenu;
  }
}
