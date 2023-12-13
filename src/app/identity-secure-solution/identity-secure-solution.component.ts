import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";

@Component({
  selector: 'identity-secure-solution',
  templateUrl: './identity-secure-solution.component.html',
  styleUrls: ['./identity-secure-solution.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})

export class IdentitySecureSolutionComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }

}
