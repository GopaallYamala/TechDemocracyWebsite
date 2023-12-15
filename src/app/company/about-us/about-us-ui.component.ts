import { Component } from '@angular/core';

@Component({
  selector: 'about-us-ui',
  templateUrl: './about-us-ui.component.html',
  styleUrls: ['./about-us-ui.component.scss']
})

export class AboutUsUIComponent {
  aboutUsData = {
    title: 'ABOUT US',
    heading: 'TechDemocracy - Your Trusted',
    subHeading: 'Securing Your Trust, Protecting Your Digital Frontier. Your Safety, Our Priority.',
    solutionName: 'Identity Security Advisory',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/partners-img.JPG'
  }
}
