import { Component, Input } from '@angular/core';

@Component({
  selector: 'iga-solutions',
  templateUrl: './iga-solutions.component.html',
  styleUrls: ['./iga-solutions.component.scss']
})

export class IGASolutionsComponent {
  @Input() igaDataObj = {
    solutionHdng : ``,
    pointsList : []
  }
}
