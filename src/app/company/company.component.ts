import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company',
  styleUrls: ['company.component.scss'],
  templateUrl: 'company.component.html',
})

export class CompanyComponent implements OnInit {
  constructor(private readonly activatedRoute: ActivatedRoute) {}

  title: string = '';
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      // this.navToPages(query.prop);
      this.title = query.prop;
    });
  }

}
