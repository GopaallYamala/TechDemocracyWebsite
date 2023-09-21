import { Component, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class CarouselComponent {

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = ['../assets/images/Slideshow1.png', '../assets/images/Slideshow2.png', '../assets/images/Slideshow3.png']
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

}
