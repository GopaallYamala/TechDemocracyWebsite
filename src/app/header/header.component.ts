import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDefinitions } from 'src/shared/animations';
import { StrapiService } from 'src/shared/services/strapi.service';
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
  resourceJson: any;
  latestRecordTitle: string;
  latestCategorie: string;

  constructor(private readonly utilService: UtilService,
    private readonly strapiService: StrapiService,
    private readonly router: Router) { }

  ngOnInit() {
    this.utilService.passValue(this.selectedState);
    this.getResources();
  }

  selectAction(action: any) {
    this.selectedState = action;
    this.displayCreateMenu = false;
    this.utilService.passValue(this.selectedState);
  }

  quickSelect() {
    this.displayCreateMenu = !this.displayCreateMenu;
  }

  getResources() {
    this.strapiService.getBlog().subscribe(res => {
      const myJSON = res.data;
      this.resourceJson = myJSON;
      let lastRecord = this.resourceJson[this.resourceJson.length - 1];
      this.latestRecordTitle = lastRecord?.attributes?.HeadingTitle;
      this.latestCategorie = lastRecord?.attributes?.category?.data?.attributes?.CategoryTitle;
    });
  }

  open() {
    let lastRecord = this.resourceJson[this.resourceJson.length - 1];
    // this.latestRecordTitle = lastRecord?.attributes?.HeadingTitle;
    // this.latestCategorie = lastRecord?.attributes?.category?.data?.attributes?.CategoryTitle;
    if (lastRecord) {
      this.router.navigate(['/blogs', { data: JSON.stringify(lastRecord), skipLocationChange: true }]);
    }
  }
}
