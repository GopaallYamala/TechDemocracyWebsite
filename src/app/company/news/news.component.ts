import { Component, ViewEncapsulation } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})

export class NewsComponent {


  upcomingEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  newsUsData = {
    title: 'NEWS & PRESS RELEASE',
    heading: 'Latest News Updates from Techdemocracy and its partners',
    subHeading: '',
    solutionName: 'Partners',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/partners-img.JPG'
  }

}
