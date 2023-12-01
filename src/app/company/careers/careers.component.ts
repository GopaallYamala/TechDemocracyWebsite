import { Component, ViewEncapsulation } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";

@Component({
  selector: 'careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})

export class CareersComponent {


  upcomingEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  careersUsData = {
    title: 'CAREERS',
    heading: 'Join us for greater revolution to collaborate in Techdemocracy',
    subHeading: '',
    solutionName: 'Partners',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/partners-img.JPG'
  }

  achivedCardsArr = [
    {value:'5 Millions+', desc:'User Identity managed since inception'},{value:'100+', desc:'SuccessfulIDM, CyberSec Implementation'},
    {value:'30+', desc:'Active current engagements in identity security'},{value:'300+', desc:'YTD/FY 2023-Q1 dedicated headcount'}
  ]

}
