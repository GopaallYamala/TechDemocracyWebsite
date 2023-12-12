import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})

export class ChallengesComponent implements OnInit {
  hasAppeared: boolean;
  onAppear(){
    this.hasAppeared = true;
  }

  @Input() benefitsDataObj = {
    qsnImportance: ``,
    importanceText: ``,
    benefits: [
      {
        bHdng: ``,
        bContent: ``,
        image:''
      },
      {
        bHdng: ``,
        bContent: ``,
        image:''
      },
      {
        bHdng: ``,
        bContent: ``,
        image:''
      },
      {
        bHdng: ``,
        bContent: ``,
        image:''
      }
    ]
  };

  ngOnInit() {
    
  }

  test () {
    this.onAppear();
  }
}
