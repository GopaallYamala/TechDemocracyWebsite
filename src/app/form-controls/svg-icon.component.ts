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
    expand_less:"<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z'/></svg>"
  };
}
