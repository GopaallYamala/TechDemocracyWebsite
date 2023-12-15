import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import AOS from "aos";

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})

export class TestimonialsComponent implements OnInit {
  testimonialsData: any = [];
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  isOverflow: any;

  ngOnInit() {
    AOS.init();
    this.testimonialsData = [
      {
        tContent: 'TechDemocracy\'s guidance and Ping Identity\'s advanced IAM platform were a game-changer. Our user experience improved drastically, along with substantial cost savings due to minimized maintenance expenses.',
        tClientImg: '',
        tRole: 'IT Manager, Leading Financial Services Firm'
      },
      {
        tContent: 'Thanks to TechDemocracy and Ping Identity, our firm now boasts enhanced security, compliance, and operational efficiency. Their modernized IAM infrastructure positioned us for growth, ensuring continued success in the dynamic financial landscape.',
        tClientImg: '',
        tRole: 'Security Compliance Officer, Prominent Financial Services Firm'
      },
      {
        tContent: 'TechDemocracy\'s guidance and Ping Identity\'s advanced IAM platform were a game-changer. Our user experience improved drastically, along with substantial cost savings due to minimized maintenance expenses.',
        tClientImg: '',
        tRole: 'IT Manager, Leading Financial Services Firm'
      },
      {
        tContent: 'Thanks to TechDemocracy and Ping Identity, our firm now boasts enhanced security, compliance, and operational efficiency. Their modernized IAM infrastructure positioned us for growth, ensuring continued success in the dynamic financial landscape.',
        tClientImg: '',
        tRole: 'Security Compliance Officer, Prominent Financial Services Firm'
      }
    ]
  }

  scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 670), behavior: 'smooth' });
    if (this.widgetsContent.nativeElement.scrollRight > this.widgetsContent.nativeElement.offsetWidth) {
      this.isOverflow = this.widgetsContent.nativeElement.scrollWidth > this.widgetsContent.nativeElement.offsetWidth;
      console.log(this.isOverflow);

    }
  }

  scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 670), behavior: 'smooth' });
  }
}

