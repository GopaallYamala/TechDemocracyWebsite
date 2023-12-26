import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AnimationDefinitions } from 'src/shared/animations';
import AOS from "aos";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})
export class AboutUsComponent implements OnInit {

  ngOnInit () {
    AOS.init();
    this.meta.addTags([
      {name: 'title', content: "About TechDemocracy | Our Vision and Guiding Principles"},
      { name: 'description', content: "Discover TechDemocracy's mission and vision in cybersecurity. Explore our identity solutions, GRC expertise, and CyberWarriors Center of Excellence." },
      { name: 'keywords', content: "About Us, Cyber security, Mission and Vision, Identity Solutions, GRC, Cyber Risk solutions, cybersecurity solutions, Cyber Sec Implementations, CyberWarriors Center of Excellence (CoE), Identity Security" }]
    );
  }
  safeURL;
  // videoUrl = `https://www.youtube.com/watch?v=mgMhoY4r0dU&t=6s`;
  // videoUrl = 'https://www.youtube.com/embed/mgMhoY4r0dU?si=1Y2InHUfmNsfezX6&amp;controls=0'
  constructor(
    private _sanitizer: DomSanitizer,
    private meta: Meta) {

    // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}
