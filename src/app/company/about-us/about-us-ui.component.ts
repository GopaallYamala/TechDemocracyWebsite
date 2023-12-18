import { Component } from '@angular/core';

@Component({
  selector: 'about-us-ui',
  templateUrl: './about-us-ui.component.html',
  styleUrls: ['./about-us-ui.component.scss']
})

export class AboutUsUIComponent {
  aboutUsData = {
    title: 'About Us',
    heading: 'TechDemocracy - Your Trusted Identity Security Advisory',
    subHeading: 'Securing Your Trust, Protecting Your Digital Frontier. Your Safety, Our Priority.',
    solutionName: '',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/heroimages/About_us.png'
  }
}
