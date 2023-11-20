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
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Customer Story'
    },
    {
      type: 'Whitepapers',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Whitepapers'
    },
    {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    },
    {
      type: 'Customer Story',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Customer Story'
    },
    {
      type: 'Whitepapers',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Read Whitepapers'
    },
    {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    },
    {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    }, {
      type: 'Webinar',
      desc: 'The quick, brown fox jumps over a lazy dog flock',
      read: 'Check Webinar'
    }

  ]

  viewAll() {
    this.categoriesIndex = this.CategorieObj.length;
  }

}
