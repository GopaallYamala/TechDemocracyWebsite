import { Component } from '@angular/core';

@Component({
  selector: 'implementation-service',
  templateUrl: './implementation-service.component.html',
  styleUrls: ['./implementation-service.component.scss']
})

export class ImplServiceComponent {
  solutionData = {
    title: 'Our Services',
    heading: 'Your Trusted Identity Security',
    subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
    solutionName: 'Implementation Services',
    solutionContent: '',
    displayBtn: true,
    // solutionImg: '../../assets/images/Solutions-Page.png',
    solutionImg: ''
  }
}
