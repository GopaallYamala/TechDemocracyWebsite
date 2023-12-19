import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { AnimationDefinitions } from 'src/shared/animations';

import AOS from "aos";


@Component({
  selector: 'privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class PrivacyPolicyComponent {
    
}