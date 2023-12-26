import { Component, Input } from '@angular/core';

@Component({
  selector: `iga-implementation`,
  templateUrl: `./iga-implementation.component.html`,
  styleUrls: [`./iga-implementation.component.scss`]
})

export class IGAImplementationComponent {
  @Input() whyChooseTDCObj: any = {
    theQsn: ``,
    theAns: ``
  };
  @Input() solutionType: string = 'Identity Governance & Administration';
}