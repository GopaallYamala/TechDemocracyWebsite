import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StrapiService } from 'src/shared/services/strapi.service';

@Component({
  selector: 'success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})

export class SuccessStoriesComponent implements OnChanges, OnInit {

  @Input() solutionType: any;
  resourcesList: any;
  category: any;
  blogTitle: any;
  subTitle: any;
  heroImage: any;
  selectedSolution:any;

  constructor(private readonly strapiService: StrapiService) { }

  ngOnInit() {
    this.getAllResources();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.solutionType && changes) {
      this.verifySolution(this.solutionType);

    }
  }

  getAllResources() {
    this.strapiService.getBlog().subscribe(res => {
      this.resourcesList = res.data;
      this.verifySolution(this.solutionType);
    })
  }

  verifySolution(type) {
    if (this.resourcesList && type) {
      this.selectedSolution = undefined;
      let index = this.resourcesList.map(res => res.attributes.solution.data.attributes.SolutionTitle).indexOf(type);
      if (index != -1) {
        this.selectedSolution = this.resourcesList[index].attributes.solution.data.attributes.SolutionTitle;
        this.category = this.resourcesList[index].attributes.category.data.attributes.CategoryTitle;
        this.blogTitle = this.resourcesList[index].attributes.HeadingTitle;
        this.subTitle = this.resourcesList[index]?.attributes?.SubTitle;
        this.heroImage = this.resourcesList[index]?.attributes.FeaturedImage.data.attributes.url;
      }
    }
  }


}