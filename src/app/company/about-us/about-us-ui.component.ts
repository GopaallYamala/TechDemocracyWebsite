import { Component } from '@angular/core';

@Component({
  selector: 'about-us-ui',
  templateUrl: './about-us-ui.component.html',
  styleUrls: ['./about-us-ui.component.scss']
})

export class AboutUsUIComponent {
  aboutUsData = {
    title: 'ABOUT US',
    heading: 'Your Trusted Identity Security Advisory Consultant',
    subHeading: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    solutionName: 'Partners',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/partners-img.JPG'
  }
}
