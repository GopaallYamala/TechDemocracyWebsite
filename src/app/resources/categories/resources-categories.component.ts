import { Component } from '@angular/core'

@Component({
  selector: 'resources-categories',
  templateUrl: './resources-categories.component.html',
  styleUrls: ['./resources-categories.component.scss']
})
export class ResourcesCategoriesComponent {

  categoriesIndex: number = 6;

  resourcesObj = ['Case Study', 'Customer Success', 'Online Journal', 'WhitePapers', 'Events & Videos', 'Reports'];
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

}
