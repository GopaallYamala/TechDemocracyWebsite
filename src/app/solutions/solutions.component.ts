import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})

export class SolutionsComponent implements OnInit {

  solutionData: any = {
    title: 'Our Solutions',
    heading: 'Unlocking Secure Access:',
    subHeading: 'Automate compliance and protect your enterprise against threats.',
    solutionName: 'Identity Governance Solutions',
    solutionContent: ' is at the center of IT operations, enabling and securing digital identities for all users, applications and data. Automating user lifecycle processes is critical for improving your operational efficiency, user experience and security posture, while reducing your risk and operational cost.',
    solutionImg: '../../assets/images/Solutions-Page.png '
  }
  title: any;

  constructor(private readonly activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      if (query.prop)
        this.navToPages(query.prop);
    });
  }

  navToPages(title?: any) {
    if (title) {
      switch (title) {
        case 'Identity Governance & Administration':
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Identity Governance Solutions',
            solutionContent: ' is at the center of IT operations, enabling and securing digital identities for all users, applications and data. Automating user lifecycle processes is critical for improving your operational efficiency, user experience and security posture, while reducing your risk and operational cost.',
            solutionImg: '../../assets/images/Solutions-Page.png '
          }
          break;
        case 'Customer Identity & Access Management':
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Customer Identity & Access Management',
            solutionContent: ' is a subset of the larger concept of identity access management (IAM) that focuses on managing and controlling external parties access to a business applications, web portals and digital services. The biggest difference between typical IAM and CIAM is that CIAM gives its users (consumers) significantly more control over their identity',
            solutionImg: '../../assets/images/Solutions-Page.png '
          }
          break;
        case `Previliged Access Management`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Previliged Access Management',
            solutionContent: ' (PAM) is an identity security solution that helps protect organizations against cyberthreats by monitoring, detecting, and preventing unauthorized privileged access to critical resources.',
            solutionImg: '../../assets/images/Solutions-Page.png '
          }
          break;
        case `Access Management`:
          this.solutionData = {
            title: 'Our Solutions',
            heading: 'Unlocking Secure Access:',
            subHeading: 'Automate compliance and protect your enterprise against threats.',
            solutionName: 'Access Management',
            solutionContent: ' is the organizational and technical processes for first registering and authorizing access rights in the configuration phase, and then in the operation phase for identifying, authenticating and controlling individuals or groups of people to have access to applications, systems or networks based on previously authorized access rights.',
            solutionImg: '../../assets/images/Solutions-Page.png '
          }
          break;
        default:
          break;
      }
    }
  }
}
