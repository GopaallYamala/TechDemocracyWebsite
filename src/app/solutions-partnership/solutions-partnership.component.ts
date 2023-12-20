import { Component, Input } from '@angular/core';

@Component({
  selector: 'solutions-partnership',
  templateUrl: './solutions-partnership.component.html',
  styleUrls: ['./solutions-partnership.component.scss']
})

export class SolutionsPartnershipComponent {

  @Input() solutionType:string='Identity Governance & Administration';

}
