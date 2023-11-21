import { Component } from '@angular/core';

@Component({
  selector: `solution-ciam`,
  templateUrl: `./solution-ciam.component.html`,
  styleUrls: [`./solution-ciam.component.scss`]
})

export class SolutionCIAMComponent {
  solutionData = {
    title: 'Our Solutions',
    heading: 'Unlocking Secure Access:',
    subHeading: 'Automate compliance and protect your enterprise against threats.',
    solutionName: 'Customer Identity & Access Management',
    solutionContent: ' is a subset of the larger concept of identity access management (IAM) that focuses on managing and controlling external parties access to a business applications, web portals and digital services. The biggest difference between typical IAM and CIAM is that CIAM gives its users (consumers) significantly more control over their identity',
    displayBtn: true,
    solutionImg: '../../assets/images/Solutions-Page.png '
  }
}