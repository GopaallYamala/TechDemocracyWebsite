import { Component, Input } from '@angular/core';

@Component({
  selector: 'solutions-hero',
  templateUrl: './solutions-hero.component.html',
  styleUrls: ['./solutions-hero.component.scss']
})

export class SolutionsHeroComponent {
  @Input() solutionName = ``;
  @Input() dataObj = {
    title: '',
    heading: '',
    subHeading: '',
    solutionName: '',
    solutionContent: '',
    solutionImg: ''
  }
}