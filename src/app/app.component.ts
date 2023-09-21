import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimationDefinitions } from 'src/shared/animations';
// import { AnimationDefinitions } from 'src/shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class AppComponent {
  title = 'TDC-Websitev3.0';
  isMenuCollapsed: boolean = false;
  // images = [944, 1011, 984].map((n) => `../assets/images/HeroImage1920_960.png`);
  images = ['../assets/images/Slideshow1.png', '../assets/images/Slideshow2.png', '../assets/images/Slideshow3.png']

  showNavigationArrows = true;
	showNavigationIndicators = false;

  safeURL;
  videoUrl = `https://www.youtube.com/watch?v=mgMhoY4r0dU&t=6s`;

	constructor(config: NgbCarouselConfig,
    private _sanitizer: DomSanitizer) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = false;

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
	}
}
