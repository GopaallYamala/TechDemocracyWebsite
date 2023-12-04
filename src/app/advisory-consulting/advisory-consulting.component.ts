import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'advisory-consulting',
  templateUrl: './advisory-consulting.component.html',
  styleUrls: ['./advisory-consulting.component.scss'],
  encapsulation: ViewEncapsulation.None
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
  };
  advAssmtDataObj: any = {
    heading: '',
    list: [
     {
      hdng: '',
      content: ''
     },
     {
      hdng: '',
      content: ''
     },
     {
      hdng: '',
      content: ''
     }
    ]
  };
  tdcConsultantDataObj: any = {
    heading: ``,
    content: ``
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
            heading: 'Identity Security Advisory ',
            subHeading: 'We decipher your business challenges, align your Identity security landscape with industry trends, and chart a roadmap for efficiency, risk reduction, and digital transformation.',
            solutionName: '',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          };
          this.advAssmtDataObj = {
            heading: 'We Advise',
            list: [
             {
              hdng: '1.	Comprehensive Review: ',
              content: 'Identify gaps and weaknesses for a strong cybersecurity plan..'
             },
             {
              hdng: '2.	Foundational Planning:',
              content: 'Leverage our expertise to create a solid plan for your transformation journey..'
             },
             {
              hdng: '3.	Strategic Roadmap:',
              content: 'Chart a strategic roadmap for efficiency, risk reduction, and digital transformation.'
             }
            ]
          };
          this.tdcConsultantDataObj = {
            heading: `Why TechDemocracy for Advisory Consulting? `,
            content: `Embarking on a cybersecurity transformation journey requires more than just a plan; it requires a strategic roadmap. TechDemocracy excels not only in identifying gaps but also in creating foundational plans aligned with your business objectives. Our advisory services go beyond the surface, ensuring a comprehensive review that lays the groundwork for a successful digital transformation.`
          };
          break;
        case 'Implementation Service':
          this.solutionData = {
            title: 'Our Services',
            heading: 'Identity Security Implementation',
            subHeading: 'From system onboarding, migration from legacy Identity security platforms, and reengineering, we leverage industry expertise to transform your Identity Security capabilities, seamlessly.',
            solutionName: '',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          };
          this.advAssmtDataObj = {
            heading: 'We Implement',
            list: [
             {
              hdng: '1. Seamless Integration',
              content: 'Ensure your IAM capabilities seamlessly adapt to your environment.'
             },
             {
              hdng: '2. Legacy System Migration',
              content: 'Modernize your systems for enhanced efficiency.'
             },
             {
              hdng: '3.Rapid Onboarding',
              content: 'Accelerate application onboarding for swift deployment.'
             }
            ]
          };
          this.tdcConsultantDataObj = {
            heading: `Why TechDemocracy for Implementation?`,
            content: `Embarking on an IAM implementation journey requires a partner with proven industry expertise. At TechDemocracy, we stand out as the go-to choice for organizations seeking a seamless transition. Our commitment to tailored solutions ensures that the implementation aligns perfectly with your unique business needs. Beyond mere deployment, we focus on ensuring that your systems are not only modernized but also future-proofed for scalability and evolving security challenges.`
          };
          break;
        case `Operations & Support`:
          this.solutionData = {
            title: 'Our Services',
            heading: 'Operationalizing your Identity Security',
            subHeading: 'We manage your Identity security environment, delivering tailored outcomes and continuous improvement insights.',
            solutionName: '',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          };
          this.advAssmtDataObj = {
            heading: 'Why Operate and Support',
            list: [
             {
              hdng: '1.	24/7 Management: ',
              content: 'Ensure uninterrupted Identity Security with our round-the-clock support.'
             },
             {
              hdng: '2.	Continuous Improvement: ',
              content: 'Receive tailored outcomes with zero downtime.'
             },
             {
              hdng: '3.	Proactive Security: ',
              content: 'Stay ahead with proactive security measures and risk mitigation.'
             }
            ]
          };
          this.tdcConsultantDataObj = {
            heading: `Why TechDemocracy for Operations and Support?`,
            content: `In the realm of Identity Security, continuous and reliable support is non-negotiable. TechDemocracy is not just a service provider but a reliable partner committed to safeguarding your systems. Our 24/7 support ensures that your organization operates seamlessly, backed by proactive security measures. We take pride in managing your environment with an unwavering focus on optimal performance and risk reduction`
          };
          break;
        case `Manage Services`:
          this.solutionData = {
            title: 'Our Services',
            heading: 'Identity Security Managed Services',
            subHeading: 'Beyond support, we ensure your Identity security ecosystem stays agile for your evolving digital business needs.',
            solutionName: '',
            solutionContent: '',
            // solutionImg: '../../assets/images/Solutions-Page.png',
            solutionImg: ''
          };
          this.advAssmtDataObj = {
            heading: 'We provide Managed Services',
            list: [
             {
              hdng: '1.	End-to-End Support: ',
              content: 'Benefit from comprehensive support across key Identity Security domains.'
             },
             {
              hdng: '2.	Seamless Transformation: ',
              content: 'Achieve transformation seamlessly, from system onboarding to reengineering.'
             },
             {
              hdng: '3.	Continuous Improvement:  ',
              content: 'Receive continuous improvement insights for ongoing optimization.'
             }
            ]
          };
          this.tdcConsultantDataObj = {
            heading: `Why TechDemocracy for Managed Services? `,
            content: `While many offer managed services, TechDemocracy takes pride in providing more than just support. Our managed services go beyond maintaining status quo; they ensure continuous improvement. From onboarding to reengineering, we manage your Identity Security environment with an unwavering focus on tailored outcomes, zero downtime, and ongoing optimization.`
          };
          break;
        default:
          break;
      }
    }
  }
}
