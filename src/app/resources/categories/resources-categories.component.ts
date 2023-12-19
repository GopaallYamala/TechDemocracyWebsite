import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'resources-categories',
  templateUrl: './resources-categories.component.html',
  styleUrls: ['./resources-categories.component.scss']
})
export class ResourcesCategoriesComponent implements OnChanges {

  categoriesIndex: number = 6;
  @Input() resourceObj: any;
  resourceJson: any;
  selectedCategorie: string = 'CaseStudy';
  selectedCategorieList: any;

  constructor(private readonly router: Router) { }

  resourcesObj = ['CaseStudy', 'Customer Success', 'Online Journal', 'Whitepapers', 'Events & Videos', 'Reports'];
  CategorieObj = [
    {
      type: 'Customer Story',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Read Customer Story'
    },
    {
      type: 'Whitepapers',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Read Whitepapers'
    },
    {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    },
    {
      type: 'Customer Story',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Read Customer Story'
    },
    {
      type: 'Whitepapers',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Read Whitepapers'
    },
    {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    }, {
      type: 'Webinar',
      desc: 'Consumer Identity and Access Management (CIAM) Implementation for a Healthcare Organization',
      read: 'Check Webinar'
    }

  ]

  viewAll() {
    this.categoriesIndex = this.CategorieObj.length;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.resourceJson = JSON.parse(this.resourceObj[0].resourceJson);
      console.log(this.resourceJson);
      this.changeValue("CaseStudy");

    }
  }

  SelectCategorie(item) {
    this.selectedCategorie = item;
    this.changeValue(item);
  }

  changeValue(value: any) {
    this.selectedCategorieList = this.resourceJson.filter(resource => resource?.attributes?.ResourceType == value);
  }

  open(id) {
    let index = this.resourceJson.map(res => res.id).indexOf(id);
    if (index !== -1) {
      this.router.navigate(['/blogs', { data: JSON.stringify(this.resourceJson[index]), skipLocationChange: true }]);
    }
  }
}
