import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'advisory-consulting',
  templateUrl: './advisory-consulting.component.html',
  styleUrls: ['./advisory-consulting.component.scss']
})

export class AdvisoryConsultingComponent implements OnInit {
  solutionData: any = {
    title: 'Our Services',
    heading: 'Your Trusted Identity Security',
    subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
    solutionName: 'Advisory Consultant',
    solutionContent: '',
    // solutionImg: '../../assets/images/Solutions-Page.png',
    solutionImg: ''
  }
  title: any;

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.navToPages(query.prop);
    });
  }

  navToPages(title?: any) {
    if (title) {
      switch (title) {
        case 'Advisory Consulting':
          this.solutionData = {
            title: 'Our Services',
            heading: 'Your Trusted Identity Security',
            subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
            solutionName: 'Advisory Consultant',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          }
          break;
        case 'Implementation Service':
          this.solutionData = {
            title: 'Our Services',
            heading: 'Your Trusted Identity Security',
            subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
            solutionName: 'Implementation Services',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          }
          break;
        case `Operations & Support`:
          this.solutionData = {
            title: 'Our Services',
            heading: 'Your Trusted Identity Security',
            subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
            solutionName: 'Operations & Support',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          }
          break;
        case `Manage Services`:
          this.solutionData = {
            title: 'Our Services',
            heading: 'Your Trusted Identity Security',
            subHeading: 'Leverage our 20+ years of IAM experience to choose the right tools, process, and investment for your industry.',
            solutionName: 'Manage Services',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          }
          break;
        default:
          break;
      }
    }
  }
}
