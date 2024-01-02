import { Location } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";
import { StrapiService } from 'src/shared/services/strapi.service';
import { ResourceService } from '../resources/shared/resources.service';

@Component({
  selector: 'case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})

export class CaseStudiesComponent implements OnInit {

  buttonsList = ["All", "Telecom", "Healthcare", "Financial", "Education", "others"];
  // listOfCaseStudies = [1, 2, 3, 4, 5];
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number;
  totalPages: number;
  overflowWidth: string;
  cardWidth: string;
  containerWidth: number;
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  isOverflow: any;
  listOfCaseStudies: any;

  constructor(private readonly resourceService: ResourceService,
    private readonly router: Router,
    private readonly location:Location,
    private readonly strapiService: StrapiService) { }


  ngOnInit() {
    AOS.init();
    this.getResources();
  }

  scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 670), behavior: 'smooth' });
    if (this.widgetsContent.nativeElement.scrollRight > this.widgetsContent.nativeElement.offsetWidth) {
      this.isOverflow = this.widgetsContent.nativeElement.scrollWidth > this.widgetsContent.nativeElement.offsetWidth;
    }
  }

  scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 670), behavior: 'smooth' });
  }

  getAllResources() {
    this.resourceService.getAllResources().subscribe(res => {
      let resourceObj = res.resources;
      resourceObj = JSON.parse(resourceObj[0].resourceJson);
      this.listOfCaseStudies = resourceObj.filter(resource => resource?.attributes?.ResourceType == "CaseStudy");
    })
  }

  getResources() {
    this.strapiService.getBlog().subscribe(res => {
      let resourceObj = res.data;
      this.listOfCaseStudies = resourceObj.filter(resource => resource?.attributes?.category?.data?.attributes?.CategoryTitle == "Case Studies");
    });
  }

  open(id) {
    let index = this.listOfCaseStudies.map(res => res.id).indexOf(id);
    if (index !== -1) {
      this.router.navigate(['/blogs', { data: JSON.stringify(this.listOfCaseStudies[index]), skipLocationChange: true }]);
      // setTimeout(() => {
      //   this.location.replaceState('/blogs');
      // }, 100);
    }
  }

}
