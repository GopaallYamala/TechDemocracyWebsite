import { Component } from '@angular/core';

@Component({
  selector: 'advisory-consulting',
  templateUrl: './advisory-consulting.component.html',
  styleUrls: ['./advisory-consulting.component.scss']
})

export class AdvisoryConsultingComponent {
  solutionData = {
    title: 'Our Services',
    heading: 'Your Trusted Identity Security',
    subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
    solutionName: 'Advisory Consultant',
    solutionContent: '',
    // solutionImg: '../../assets/images/Solutions-Page.png',
    solutionImg: ''
  }
}
