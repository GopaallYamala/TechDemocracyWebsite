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
  selectedCategorie: string = "All";
  selectedCategorieList: any;
  @Input() categoriesList: any;

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
    this.categoriesIndex = this.categoriesList.length;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.resourceJson = JSON.parse(this.resourceObj);
      console.log(this.resourceJson);
      this.changeValue("Case Studies");
      this.test();

    }
  }

  SelectCategorie(item) {
    this.selectedCategorie = item;
    if (item === "All") {
      this.allCategories();
    }
    else
      this.changeValue(item);
  }

  allCategories() {
    this.selectedCategorieList = this.resourceJson;
  }

  changeValue(value: any) {
    this.selectedCategorieList = this.resourceJson.filter(resource => resource?.attributes?.category?.data?.attributes?.CategoryTitle == value);
  }

  open(id) {
    let index = this.resourceJson.map(res => res.id).indexOf(id);
    if (index !== -1) {
      this.router.navigate(['/blogs', { data: JSON.stringify(this.resourceJson[index]), skipLocationChange: true }]);
    }
  }
  test() {
    const item = {
      textbox: {
        id: 1,
        name: "Text Box",
        tmprops: {
          cur: 0,
          min: 5000,
          visible: true,
        },
        tmctxlst: {
          version: "2",
          txttmctx: {
            alwysshw: false,
            name: "default"
          }
        },
      }
    }
    console.log(this.solve(item.textbox, "p"));
  }

  solve(obj, tagName) {
    const tag = document.createElement(tagName);
    const currentKeys = Object.keys(obj)

    currentKeys.forEach((attribute => {
      if (typeof obj[attribute] === "object") {
        tag.appendChild(this.solve(obj[attribute], attribute))
      } else {
        tag.setAttribute(attribute, obj[attribute]);
      }
    }))
    return tag;
  }
}
