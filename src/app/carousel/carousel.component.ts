import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AnimationDefinitions } from 'src/shared/animations';
import { Router } from '@angular/router';

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
  constructor(config: NgbCarouselConfig, 
    private readonly router: Router) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.slideShowData = [
    {
      caption: `Your trusted identity partner:`,
      heading: `Identity Attacks Are Fast-growing, Serious, and Costly. How Prepared Are You?`,
      content: `TechDemocracy deciphers your Business Challenges, aligns your Identity Security landscape with Industry Trends, and Charts a Roadmap for Efficiency, Risk Reduction, and Digital Transformation `,
      imgUrl: `../../assets/images/slides/HeroImg_Services.svg`
    },
    {
      caption: `Your trusted identity partner:`,
      heading: `Not Half-baked, Not a Broken Piece of Solution, Not Off-the-shelf`,
      content: `Secure your Human and Non-Human Identities, Defend Against Threats, and Meet your Compliance Requirements with tailor-made and agile Identity Security Solutions by TechDemocracy`,
      imgUrl: `../../assets/images/slides/HeroImg_Solutions.svg`
    },
    {
      caption: `Your trusted identity partner:`,
      heading: `We Handle the Backend, You Conquer the Frontend`,
      content: `TechDemocracy is a boutique cybersecurity firm with over two decades of experience, focusing on fully managing Identity Security solutions that integrate and operate the entire identity lifecycle under one umbrella`,
      imgUrl: `../../assets/images/slides/HeroImg_AboutUS_v2-01.svg`
    },
    {
      caption: `SecureCyber Hub:`,
      heading: `Cybersecurity Security Operations Center`,
      content: `Cyber Security Operations Center encompasses Technologies, Processes, People and processes to defend IT, OT/ICT infrastructure like data, applications, assets and networks from cyber attacks.`,
      imgUrl: `../../assets/images/slides/HeroImg_ManagedSoc-01.svg`
    }
  ]
  }

  talkToExpert () {
    this.router.navigate(['/company'], { queryParams: { prop: 'Contact Us' } });
  }

  knowMore() {
    this.router.navigate(['/solutions'], { queryParams: { prop: 'Identity Governance & Administration' } });
  }

}
