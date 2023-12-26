import { Component, OnInit } from '@angular/core'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor (private readonly meta: Meta) {}

  ngOnInit () {
    this.meta.addTags([
      {name: 'title', content: "TechDemocracy Partners | Strategy and Technology Partners"},
      { name: 'description', content: "Engage with our Strategy and Technology Partnerships. Explore Services & Channel Reseller options. Leverage the expertise of Techdemocracy Official Partners." },
      { name: 'keywords', content: "Strategy Partners, Technology Partners, Cybersecurity solutions, Channel Reseller, Services & Channel Reseller, Official Partner, Techdemocracy" }]
    );
  }
  
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
