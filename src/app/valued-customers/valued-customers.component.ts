import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'valued-customers',
  templateUrl: './valued-customers.component.html',
  styleUrls: ['./valued-customers.component.scss']
})

export class ValuedCustomersComponent implements OnInit {
  imgPath: Array<string>;

  ngOnInit() {
    this.imgPath = ["../../assets/images/ast.JPG",
                    "../../assets/images/ascension.JPG",
                    "../../assets/images/spectrum-health.JPG",
                    "../../assets/images/s-and-p.JPG",
                    "../../assets/images/T-Mobile.JPG",
                    "../../assets/images/ast.JPG"]
  }  
}