import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'solutions-hero',
  templateUrl: './solutions-hero.component.html',
  styleUrls: ['./solutions-hero.component.scss']
})

export class SolutionsHeroComponent {

  constructor (private readonly router: Router) {}
  @Input() solutionName = ``;
  @Input() dataObj = {
    title: '',
    heading: '',
    subHeading: '',
    solutionName: '',
    solutionContent: '',
    displayBtn: true,
    solutionImg: '../../assets/images/Solutions-Page.png',
  }

  talkToExpert () {
    this.router.navigate(['/company'], { queryParams: { prop: 'Contact us' } });
  }
}
