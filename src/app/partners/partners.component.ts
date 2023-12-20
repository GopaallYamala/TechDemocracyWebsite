import { Component } from '@angular/core'

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partnersData = {
    title: 'Partners',
    heading: 'We are Technologically Partner with major Identity Giants in the World',
    subHeading: '',
    solutionName: '',
    displayBtn: false,
    solutionContent: ' ',
    solutionImg: '../../assets/images/heroimages/Partners.png'
  }
}
