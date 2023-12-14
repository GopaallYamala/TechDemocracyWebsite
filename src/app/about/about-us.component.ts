import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";


@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class AboutUsComponent implements OnInit {

  ngOnInit () {
    AOS.init();
  }
  safeURL;
  // videoUrl = `https://www.youtube.com/watch?v=mgMhoY4r0dU&t=6s`;
  // videoUrl = 'https://www.youtube.com/embed/mgMhoY4r0dU?si=1Y2InHUfmNsfezX6&amp;controls=0'
  constructor(
    private _sanitizer: DomSanitizer) {

    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
