import { Component } from '@angular/core';

@Component({
  selector: 'ops-manage-services',
  templateUrl: './ops-manage-services.component.html',
  styleUrls: ['./ops-manage-services.component.scss']
})

export class OpsManageServicesComponent {
  solutionData = {
    title: 'Our Services',
    heading: 'Your Trusted Identity Security',
    subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
    solutionName: 'Operations & Manage Services',
    solutionContent: '',
    // solutionImg: '../../assets/images/Solutions-Page.png',
    solutionImg: ''
  }
}