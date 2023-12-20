import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'valued-customers',
  templateUrl: './valued-customers.component.html',
  styleUrls: ['./valued-customers.component.scss']
})

export class ValuedCustomersComponent implements OnInit {
  imgPath: Array<string>;

  ngOnInit() {
    AOS.init();
    this.imgPath = [
      "../../assets/images/Partners/Corewell.svg",
      "../../assets/images/Partners/Ascension.svg",
      "../../assets/images/Partners/SpGlobal.svg",
      "../../assets/images/Partners/eq.svg",
      "../../assets/images/Partners/TMobile.svg"]
  }  
}