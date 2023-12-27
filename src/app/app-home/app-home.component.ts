import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: AnimationDefinitions
})

export class AppHomeComponent implements OnInit {

  countryName: string;
  timeStamp: string;

  potentialDiffHomeObj: any = {
    hdng: ``,
    content: ``,
    featuresObj: [
      {
        title: ``,
        info: ``
      }
    ]
  }

  constructor(private meta: Meta) {
    // this.timeStamp = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // this.getContry();
  }

  ngOnInit() {
    // Meta tags starts
    this.meta.addTags([
      {name: 'title', content: "TechDemocracy - Leader in Identity Security Solutions - IAM"},
      { name: 'description', content:  "Enhance your cybersecurity with TechDemocracy's cutting-edge IAM solutions. We specialize in identity and access management, SOC, IGA, PAM, and CIAM." },
      { name: 'keywords', content: 'identity and access management, management identity, identity management and access management, network security, iam solutions, cyber risk visibility, SOC, IGA, PAM, CIAM, iam identity access management, IDM ' }]
    );
    // Meta tags ends
    this.potentialDiffHomeObj = {
      hdng: `The TechDemocracy Advantage`,
    content: `We are a boutique cybersecurity company that’s been in the business for more than two decades. Our philosophy is to work with a cohort of businesses where we can roll up our sleeves and deliver them the security, safety and seamless deployment within their budget and timelines.`,
    featuresObj: [
      {
        title: `Skilled Resources`,
        info: `Our team’s expertise ensures a seamless transition from planning to execution, with ready-to-go, experienced consultants available to kickstart their engagement from Day 0`,
        icon: `../../assets/images/Home_Icons/HomeSkilledResources.svg`
      },
      {
        title: `Industry Experience`,
        info: `Over 200 successful Identity Security & Cyber Security engagements. We’ve developed vertical-specific processes and solution frameworks to deliver tailored solutions`,
        icon: `../../assets/images/Home_Icons/HomeIndustryExperience.svg`
      },
      {
        title: `Center of Excellence (CoE)`,
        info: `A dedicated team of SMEs to ensure thought leadership, provide technology expertise guidance, and offer frameworks to expedite deployment cycles, improving project timelines.`,
        icon: `../../assets/images/Home_Icons/HomeCenterofExcellenceCoE.svg`
      },
      {
        title: `Trainings`,
        info: `Industry-proven training methodology for transferring Identity Security functional and technical knowledge. Includes a dedicated Identity Security Training Lab`,
        icon: `../../assets/images/Home_Icons/HomeTrainings.svg`
      },
      {
        title: `Innovation`,
        info: `Innovation is in our DNA. We boast a robust product line used to develop utilities & accelerators, aiding clients in their Identity Journey, implementation and support`,
        icon: `../../assets/images/Home_Icons/HomeInnovation.svg`
      },
      {
        title: `Alliance & Partnership`,
        info: `Reseller and services partnerships with leading Identity product vendors in the USA, Canada, and India. Our strategic collaborations offer unparalleled access to cutting-edge solutions`,
        icon: `../../assets/images/Home_Icons/HomePartnership.svg`
      }
    ]
    }
  }

  getContry() {
    fetch('https://api.ipregistry.co/?key=tryout')
      .then(function (response) {
        return response.json();
      })
      .then(function (payload) {
        console.log(payload.location.country.name + ', ' + payload.location.city);
      });
  }

}
