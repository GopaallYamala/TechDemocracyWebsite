import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'svg-icon-component',
  template: `
		<div class="svg-icon {{classes}} fill-default"
		[innerHTML]="iconData" placement="bottom" id="{{svgId}}" delay="500">
		</div>
    `,
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SVGIconComponent implements OnInit {
  @Input() name: any;
  @Input() classes = '';
  @Input() svgId: any;
  iconData: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.iconData = this.sanitizer.bypassSecurityTrustHtml(this.svgDefintions[this.name]);
  }

  svgDefintions: any = {
    back_arrow_icon: "<svg xmlns='http://www.w3.org/2000/svg' x='0' y='0' enable-background='new 0 0 16 16' version='1.1' viewBox='0 0 16 16' xml:space='preserve'><path d='M9.3,1.4L8,0.1L0,8l8,8l1.3-1.3L3.5,9h12.4V7.1H3.5L9.3,1.4z'/></svg>",
    expand_more:"<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M24 24H0V0h24v24z' fill='none' opacity='.87'/><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'/></svg>",
    expand_less:"<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z'/></svg>",
    lang_globe: "<svg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 0 24 24' width='18px' fill='#FFFFFF'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z'/></svg>",
    chat_bubble_white: "<svg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 0 24 24' width='18px' fill='#FFFFFF'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/></svg>"
  };
}
