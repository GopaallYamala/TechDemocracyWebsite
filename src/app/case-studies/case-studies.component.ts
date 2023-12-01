import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})

export class CaseStudiesComponent implements OnInit {

  buttonsList = ["All", "Telecom", "Healthcare", "Financial", "Education", "others"];
  listOfCaseStudies = [1, 2, 3, 4, 5];
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


  ngOnInit() {

  }

  scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 670), behavior: 'smooth' });
    if (this.widgetsContent.nativeElement.scrollRight > this.widgetsContent.nativeElement.offsetWidth) {
      this.isOverflow = this.widgetsContent.nativeElement.scrollWidth > this.widgetsContent.nativeElement.offsetWidth;
      // console.log(this.isOverflow);

    }
  }

  scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 670), behavior: 'smooth' });
  }

}
