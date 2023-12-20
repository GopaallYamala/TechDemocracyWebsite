import { Component } from '@angular/core'

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partnersData = {
    title: 'Partners',
    heading: 'We Work With Leading Identity Giants to Deliver Superior Cybersecurity Services',
    subHeading: '',
    solutionName: '',
    displayBtn: false,
    solutionContent: ' ',
    solutionImg: '../../assets/images/heroimages/Partners.png'
  }
}
