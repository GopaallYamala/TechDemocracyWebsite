import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimationDefinitions } from 'src/app/admin/admin-blog-post/shared/animations';


@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class AboutUsComponent {

  safeURL;
  videoUrl = `https://www.youtube.com/watch?v=mgMhoY4r0dU&t=6s`;
  constructor(
    private _sanitizer: DomSanitizer) {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
