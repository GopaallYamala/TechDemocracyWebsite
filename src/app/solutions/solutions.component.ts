import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})

export class SolutionsComponent {
  solutionData = {
    solutionName: 'Identity Governance Solutions',
    solutionContent: ' is at the center of IT operations, enabling and securing digital identities for all users, applications and data. Automating user lifecycle processes is critical for improving your operational efficiency, user experience and security posture, while reducing your risk and operational cost.',
    solutionImg: ''
  }
}
