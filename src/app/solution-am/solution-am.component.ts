import { Component } from '@angular/core';

@Component({
  selector: `solution-am`,
  templateUrl: `./solution-am.component.html`,
  styleUrls: [`./solution-am.component.scss`]
})

export class SolutionAMComponent {
  solutionData = {
    solutionName: 'Access Management',
    solutionContent: ' is the organizational and technical processes for first registering and authorizing access rights in the configuration phase, and then in the operation phase for identifying, authenticating and controlling individuals or groups of people to have access to applications, systems or networks based on previously authorized access rights.',
    solutionImg: ''
  }
}