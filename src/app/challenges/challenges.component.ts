import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    
  }

  test () {
    this.onAppear();
  }
}
