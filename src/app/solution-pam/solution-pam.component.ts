import { Component } from '@angular/core';

@Component({
  selector: `solution-pam`,
  templateUrl: `./solution-pam.component.html`,
  styleUrls: [`./solution-pam.component.scss`]
})

export class SolutionPAMComponent {
  solutionData = {
    title: 'Our Solutions',
    heading: 'Unlocking Secure Access:',
    subHeading: 'Automate compliance and protect your enterprise against threats.',
    solutionName: 'Previliged Access Management',
    solutionContent: ' (PAM) is an identity security solution that helps protect organizations against cyberthreats by monitoring, detecting, and preventing unauthorized privileged access to critical resources.',
    solutionImg: '../../assets/images/Solutions-Page.png '
  }
}