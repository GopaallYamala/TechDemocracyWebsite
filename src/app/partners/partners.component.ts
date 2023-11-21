import { Component } from '@angular/core'

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partnersData = {
    title: 'TEAM CUSTOMER COMMUNITY',
    heading: 'We are Technologically Partner with major Identity Giants in the World',
    subHeading: '',
    solutionName: 'Partners',
    displayBtn: false,
    solutionContent: ' is the organizational and technical processes for first registering and authorizing access rights in the configuration phase, and then in the operation phase for identifying, authenticating and controlling individuals or groups of people to have access to applications, systems or networks based on previously authorized access rights.',
    solutionImg: '../../assets/images/partners-img.JPG'
  }
}
