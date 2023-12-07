import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimationDefinitions } from 'src/shared/animations';


@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = ['../../assets/images/Slideshow1.png', '../../assets/images/Slideshow2.png', '../../assets/images/Slideshow3.png'];

  slideShowData : any = [{}]
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.slideShowData = [
    {
      caption: `Your trusted identity partner:`,
      heading: `Identity attacks are Fast-Growing, Serious and Costly. How prepared are you?`,
      content: `Secure identities, Defend against Threats, and Meet All-new Compliance Levels`,
      imgUrl: `../../assets/images/slides/HeroSlide_Services-01.svg`
    },
    {
      caption: `Your trusted identity partner:`,
      heading: `Not Half-baked, Not a Broken piece of Solution, Not Off-the-shelf`,
      content: `Modernize your Identity security posture with our comprehensive.`,
      imgUrl: `../../assets/images/slides/HeroSlide_Solutions.svg`
    },
    {
      caption: `Your trusted identity partner:`,
      heading: `We are experts in Delivering Identity Solutions`,
      content: `Embark on a captivating carousel showcasing our IDM prowess. Explore cutting-edge solutions like multi-factor authentication, role based access control, and more. Elevate your identity security with us.`,
      imgUrl: `../../assets/images/slides/HeroSlide_AboutUS-01.svg`
    },
    {
      caption: `SecureCyber Hub:`,
      heading: `Cybersecurity security Operations Center`,
      content: `Cyber Security Operations Center encompasses Technologies, Processes, People and processes to defend IT, OT/ICT infrastructure like data, applications, assets and networks from cyber attacks.`,
      imgUrl: `../../assets/images/slides/HeroSlide_ManageSOC.svg`
    }
  ]
  }

}
