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
        tRole: 'IT Manager, Leading Financial Services Firm, USA'
      },
      {
        tContent: 'TechDemocracy, in collaboration with SailPoint, revolutionized our retail enterprise. The IGA implementation elevated security, streamlined access, and ensured operational efficiency. Their expertise positioned us for growth, showcasing a commitment to excellence in identity security.',
        tClientImg: '',
        tRole: 'CISO, Largest Online Retail Enterprise, Canada'
      },
      {
        tContent: 'TechDemocracy\'s SOC services transformed our security landscape. Their expertise and proactive approach ensured real-time threat detection, rapid incident response, and compliance adherence. The partnership fortified our cybersecurity posture, providing a robust defense against evolving threats.',
        tClientImg: '',
        tRole: 'Cyber Security Officer, Largest Government Entity, India'
      },
      {
        tContent: 'TechDemocracy\'s expertise in healthcare identity management was instrumental in our transition from a burdensome legacy system to SailPoint. Their seamless migration and integration with critical healthcare platforms like Epic Systems showcased their commitment to improving our security and operational efficiency.',
        tClientImg: '',
        tRole: 'Senior Director, Identity & Access Management, One of the largest healthcare organization in midwest region, USA'
      },
      {
        tContent: 'With the help of TechDemocracy, we replaced the legacy Access Governance system and established a contemporary CIAM platform utilizing OAuth and OIDC protocols for user authentication and SSO across both web and mobile applications within a remarkable 12-month timeframe.',
        tClientImg: '',
        tRole: 'IT Security Manager, Healthcare Sector, USA'
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

