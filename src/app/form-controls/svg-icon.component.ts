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
    chat_bubble_white: "<svg xmlns='http://www.w3.org/2000/svg' height='18px' viewBox='0 0 24 24' width='18px' fill='#FFFFFF'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'/></svg>",
    adv_consulting: "<svg xmlns='http://www.w3.org/2000/svg' width='57.645' height='57.642' viewBox='0 0 57.645 57.642'>   <g id='idea_841743' transform='translate(0 -0.012)'>     <g id='Group_3392' data-name='Group 3392' transform='translate(27.132 6.765)'>       <g id='Group_3391' data-name='Group 3391'>         <path id='Path_85164' data-name='Path 85164' d='M242.674,59.99a1.689,1.689,0,0,0,0,3.378A10.145,10.145,0,0,1,252.808,73.5a1.689,1.689,0,1,0,3.378,0A13.527,13.527,0,0,0,242.674,59.99Z' transform='translate(-240.985 -59.99)'/>       </g>     </g>     <g id='Group_3394' data-name='Group 3394' transform='translate(8.558 0.012)'>       <g id='Group_3393' data-name='Group 3393'>         <path id='Path_85165' data-name='Path 85165' d='M91.921.464a20.254,20.254,0,0,0-10.8,33.256,13.157,13.157,0,0,1,3.329,8.622V45.72a5.075,5.075,0,0,0,3.5,4.818,8.423,8.423,0,0,0,16.642,0,5.075,5.075,0,0,0,3.5-4.818V42.342a13.332,13.332,0,0,1,3.427-8.733A20.268,20.268,0,0,0,91.921.464Zm4.353,53.812a5.168,5.168,0,0,1-4.777-3.5h9.554A5.168,5.168,0,0,1,96.274,54.276Zm8.444-8.557a1.691,1.691,0,0,1-1.689,1.689H89.519A1.691,1.691,0,0,1,87.83,45.72V44.031h16.888Zm4.265-14.337a16.935,16.935,0,0,0-4.172,9.271H87.738a16.69,16.69,0,0,0-4.09-9.178,16.888,16.888,0,1,1,25.336-.093Z' transform='translate(-76.01 -0.012)'/>       </g>     </g>     <g id='Group_3396' data-name='Group 3396' transform='translate(0 20.275)'>       <g id='Group_3395' data-name='Group 3395'>         <path id='Path_85166' data-name='Path 85166' d='M5.066,179.99H1.689a1.689,1.689,0,1,0,0,3.378H5.066a1.689,1.689,0,1,0,0-3.378Z' transform='translate(0 -179.99)'/>       </g>     </g>     <g id='Group_3398' data-name='Group 3398' transform='translate(0.495 8.948)'>       <g id='Group_3397' data-name='Group 3397'>         <path id='Path_85167' data-name='Path 85167' d='M9.665,82.266,7.276,79.878a1.689,1.689,0,0,0-2.388,2.388l2.388,2.388a1.689,1.689,0,0,0,2.388-2.388Z' transform='translate(-4.394 -79.383)'/>       </g>     </g>     <g id='Group_3400' data-name='Group 3400' transform='translate(0.495 29.214)'>       <g id='Group_3399' data-name='Group 3399'>         <path id='Path_85168' data-name='Path 85168' d='M9.665,259.878a1.689,1.689,0,0,0-2.388,0l-2.388,2.388a1.689,1.689,0,0,0,2.388,2.388l2.388-2.388A1.689,1.689,0,0,0,9.665,259.878Z' transform='translate(-4.393 -259.384)'/>       </g>     </g>     <g id='Group_3402' data-name='Group 3402' transform='translate(50.889 20.275)'>       <g id='Group_3401' data-name='Group 3401'>         <path id='Path_85169' data-name='Path 85169' d='M457.066,179.99h-3.378a1.689,1.689,0,1,0,0,3.378h3.378a1.689,1.689,0,1,0,0-3.378Z' transform='translate(-452 -179.99)'/>       </g>     </g>     <g id='Group_3404' data-name='Group 3404' transform='translate(51.384 8.948)'>       <g id='Group_3403' data-name='Group 3403'>         <path id='Path_85170' data-name='Path 85170' d='M461.665,79.878a1.689,1.689,0,0,0-2.388,0l-2.388,2.388a1.689,1.689,0,0,0,2.388,2.388l2.388-2.388A1.689,1.689,0,0,0,461.665,79.878Z' transform='translate(-456.393 -79.383)'/>       </g>     </g>     <g id='Group_3406' data-name='Group 3406' transform='translate(51.384 29.214)'>       <g id='Group_3405' data-name='Group 3405'>         <path id='Path_85171' data-name='Path 85171' d='M461.665,262.266l-2.388-2.388a1.689,1.689,0,0,0-2.388,2.388l2.388,2.388a1.689,1.689,0,1,0,2.388-2.388Z' transform='translate(-456.393 -259.384)'/>       </g>     </g>   </g> </svg> ",
    impl_services: "<svg xmlns='http://www.w3.org/2000/svg' width='58.612' height='59.616' viewBox='0 0 58.612 59.616'><path id='process_6624309' d='M20.46.415A16.147,16.147,0,0,0,9.042,27.98a16.346,16.346,0,0,0,1.425,1.268,3.5,3.5,0,0,1,1.394,2.876V34.87a6.176,6.176,0,0,0,6.169,6.169h4.859a6.176,6.176,0,0,0,6.169-6.169V32.124a3.5,3.5,0,0,1,1.394-2.876,16.363,16.363,0,0,0,1.425-1.268A16.147,16.147,0,0,0,20.46.415Zm0,16.713a.967.967,0,1,1,.967-.967.967.967,0,0,1-.967.967Zm5.93,13.708a6.691,6.691,0,0,0-.126,1.288v.264H14.655v-.264a6.691,6.691,0,0,0-.126-1.288Zm-3.5,7.408H18.031a3.379,3.379,0,0,1-3.36-3.062H26.249A3.379,3.379,0,0,1,22.889,38.244ZM29.9,26a13.516,13.516,0,0,1-1.181,1.051,6.671,6.671,0,0,0-1.012.99l-.047,0h-5.8v-8.39a3.762,3.762,0,1,0-2.795,0v8.389h-5.8l-.047,0a6.667,6.667,0,0,0-1.012-.99A13.532,13.532,0,0,1,11.018,26,13.353,13.353,0,1,1,29.9,26ZM61.779,47.611a1.4,1.4,0,0,0,1.145-1.374V41.113a1.4,1.4,0,0,0-1.145-1.374l-2.37-.436q-.17-.461-.376-.907L60.4,36.412a1.4,1.4,0,0,0-.162-1.782l-3.623-3.623a1.4,1.4,0,0,0-1.782-.162l-1.984,1.368q-.446-.206-.907-.376l-.435-2.37a1.4,1.4,0,0,0-1.374-1.145H45.011a1.4,1.4,0,0,0-1.374,1.145L43.2,31.838q-.461.17-.907.376L40.31,30.846a1.4,1.4,0,0,0-1.781.162l-3.623,3.623a1.4,1.4,0,0,0-.162,1.781L36.112,38.4q-.206.446-.376.907l-2.37.435a1.4,1.4,0,0,0-1.145,1.374v5.123a1.4,1.4,0,0,0,1.145,1.374l2.37.435q.17.461.376.907l-1.368,1.984a1.4,1.4,0,0,0,.162,1.782l3.623,3.623a1.4,1.4,0,0,0,1.782.162l1.984-1.368q.446.206.907.376l.435,2.37a1.4,1.4,0,0,0,1.374,1.145h5.123a1.4,1.4,0,0,0,1.374-1.145l.435-2.37q.461-.17.907-.376L54.834,56.5a1.4,1.4,0,0,0,1.781-.162l3.623-3.623a1.4,1.4,0,0,0,.162-1.781l-1.368-1.984q.205-.446.376-.907ZM58.09,45.447A1.4,1.4,0,0,0,57,46.429a9.77,9.77,0,0,1-.814,1.963,1.4,1.4,0,0,0,.075,1.466l1.177,1.707-1.977,1.977-1.707-1.177a1.4,1.4,0,0,0-1.466-.075,9.76,9.76,0,0,1-1.963.813,1.4,1.4,0,0,0-.983,1.089l-.374,2.039H46.175L45.8,54.192a1.4,1.4,0,0,0-.983-1.089,9.773,9.773,0,0,1-1.963-.814,1.4,1.4,0,0,0-1.466.075l-1.707,1.178-1.976-1.977,1.177-1.707a1.4,1.4,0,0,0,.075-1.466,9.774,9.774,0,0,1-.814-1.963,1.4,1.4,0,0,0-1.089-.983l-2.039-.374v-2.8l2.039-.374a1.4,1.4,0,0,0,1.089-.983,9.778,9.778,0,0,1,.814-1.963,1.4,1.4,0,0,0-.075-1.466l-1.177-1.707,1.977-1.977,1.707,1.177a1.4,1.4,0,0,0,1.466.075,9.762,9.762,0,0,1,1.963-.814,1.4,1.4,0,0,0,.983-1.089l.374-2.039h2.8l.374,2.039a1.4,1.4,0,0,0,.983,1.089,9.76,9.76,0,0,1,1.963.814,1.4,1.4,0,0,0,1.466-.075l1.707-1.177,1.977,1.977-1.177,1.707a1.4,1.4,0,0,0-.075,1.466A9.77,9.77,0,0,1,57,40.919a1.4,1.4,0,0,0,1.089.983l2.039.374v2.8Zm-10.518-8.6A6.824,6.824,0,1,0,54.4,43.674a6.824,6.824,0,0,0-6.824-6.824Zm0,10.854a4.03,4.03,0,1,1,4.03-4.03,4.03,4.03,0,0,1-4.03,4.03ZM9.213,46.63V40.547a1.4,1.4,0,1,1,2.795,0V46.63a4.706,4.706,0,0,0,4.7,4.7H26.92l-2.862-2.716a1.4,1.4,0,0,1,1.924-2.027l5.6,5.311a1.4,1.4,0,0,1,0,2.027l-5.6,5.311a1.4,1.4,0,0,1-1.924-2.027l3.25-3.084h-10.6A7.5,7.5,0,0,1,9.213,46.63ZM43.65,2.415l-3.056,2.9h9.934a7.5,7.5,0,0,1,7.5,7.5V26.524a1.4,1.4,0,1,1-2.795,0V12.81a4.706,4.706,0,0,0-4.7-4.7H40.594l3.056,2.9a1.4,1.4,0,1,1-1.924,2.027l-5.6-5.311a1.4,1.4,0,0,1,0-2.027l5.6-5.31A1.4,1.4,0,0,1,43.65,2.416Z' transform='translate(-4.312 -0.005)'/></svg>",
    support_n_ops: "<svg xmlns='http://www.w3.org/2000/svg' width='49.062' height='49.062' viewBox='0 0 49.062 49.062'><path id='customer-service_1168331' d='M44.7,18.778h0a20.215,20.215,0,0,0-40.327,0h0A4.37,4.37,0,0,0,0,23.143v7.57a4.37,4.37,0,0,0,4.365,4.366H12.94V20.215a11.591,11.591,0,1,1,23.182,0V35.078h3.01v1.537a6.7,6.7,0,0,1-6.695,6.695H31a4.321,4.321,0,0,0-4.067-2.877H22.133a4.314,4.314,0,1,0,0,8.629h4.795A4.321,4.321,0,0,0,31,46.185h1.441a9.581,9.581,0,0,0,9.57-9.57V35.079H44.7a4.37,4.37,0,0,0,4.365-4.366v-7.57A4.37,4.37,0,0,0,44.7,18.778ZM26.928,46.187H22.133a1.44,1.44,0,1,1,0-2.879h4.795a1.44,1.44,0,1,1,0,2.879ZM10.065,32.2h-5.7a1.492,1.492,0,0,1-1.491-1.49v-7.57a1.492,1.492,0,0,1,1.491-1.491h5.7ZM24.531,5.749A14.486,14.486,0,0,0,10.136,18.778H7.25a17.34,17.34,0,0,1,34.561,0H38.925A14.486,14.486,0,0,0,24.531,5.749ZM46.187,30.713A1.493,1.493,0,0,1,44.7,32.2H39V21.653h5.7a1.492,1.492,0,0,1,1.491,1.491Zm0,0'/></svg>",
    managed_services: "<svg xmlns='http://www.w3.org/2000/svg' width='49.06' height='49.062' viewBox='0 0 49.06 49.062'><g id='repair-tool_2760290' transform='translate(-2 -1.999)'><path id='XMLID_1644_' d='M28.389,51.061a6.139,6.139,0,0,1-6.133-6.133V21.917A11.377,11.377,0,0,1,23.21,2.192a1.752,1.752,0,0,1,2.551,1.561v7.575l2.628,1.051,2.628-1.051V3.753a1.752,1.752,0,0,1,2.551-1.561,11.378,11.378,0,0,1,.953,19.728V44.928a6.139,6.139,0,0,1-6.133,6.133ZM22.256,7.373a7.877,7.877,0,0,0,2.551,11.972,1.752,1.752,0,0,1,.953,1.559V44.928a2.628,2.628,0,1,0,5.256,0V20.9a1.752,1.752,0,0,1,.953-1.559A7.875,7.875,0,0,0,34.522,7.374v5.139a1.756,1.756,0,0,1-1.1,1.628l-4.38,1.752a1.742,1.742,0,0,1-1.3,0l-4.38-1.752a1.755,1.755,0,0,1-1.1-1.628Z' transform='translate(11.282)'/><path id='Path_85162' data-name='Path 85162' d='M28.412,51.06H24.65a3.519,3.519,0,0,1-3.494-3.234l-.221-2.865a19.117,19.117,0,0,1-3.478-1.444l-2.183,1.87a3.519,3.519,0,0,1-4.757-.18L7.854,42.541a3.521,3.521,0,0,1-.182-4.759L9.541,35.6A19.117,19.117,0,0,1,8.1,32.123L5.234,31.9A3.516,3.516,0,0,1,2,28.412V24.648a3.519,3.519,0,0,1,3.236-3.494L8.1,20.936a19.015,19.015,0,0,1,1.444-3.478L7.672,15.273a3.52,3.52,0,0,1,.184-4.759l2.66-2.662a3.52,3.52,0,0,1,4.759-.182l2.183,1.87A19.117,19.117,0,0,1,20.936,8.1l.221-2.865A3.518,3.518,0,0,1,24.648,2H26.53a1.752,1.752,0,1,1,0,3.5H24.648l-.315,4.1a1.753,1.753,0,0,1-1.353,1.572,15.6,15.6,0,0,0-4.79,1.989,1.743,1.743,0,0,1-2.069-.156l-3.128-2.679-2.66,2.663,2.679,3.126a1.75,1.75,0,0,1,.154,2.069,15.675,15.675,0,0,0-1.989,4.79A1.75,1.75,0,0,1,9.6,24.333l-4.1.315v3.764l4.1.315a1.752,1.752,0,0,1,1.573,1.353,15.6,15.6,0,0,0,1.989,4.79,1.753,1.753,0,0,1-.154,2.069l-2.679,3.126,2.662,2.663,3.126-2.679a1.748,1.748,0,0,1,2.069-.156,15.675,15.675,0,0,0,4.79,1.989,1.752,1.752,0,0,1,1.353,1.572l.315,4.1H28.41a1.752,1.752,0,0,1,3.494.27,3.518,3.518,0,0,1-3.492,3.234Z' transform='translate(0 0.001)'/><path id='Path_85163' data-name='Path 85163' d='M9,21.2a12.219,12.219,0,0,1,10.224-12.1,1.752,1.752,0,1,1,.578,3.455,8.763,8.763,0,1,0,4.384,16.9,1.751,1.751,0,1,1,1.17,3.3A12.28,12.28,0,0,1,9,21.2Z' transform='translate(5.265 5.327)'/></g></svg>",
    right_arrow: "<svg xmlns='http://www.w3.org/2000/svg' width='39.997' height='39.998' viewBox='0 0 39.997 39.998'><g id='Group_3408' data-name='Group 3408' transform='translate(-523.002 -1419.001)'><g id='Group_3409' data-name='Group 3409'><path id='Subtraction_1' data-name='Subtraction 1' d='M-12649-8116h-28a6.007,6.007,0,0,1-6-6v-28a6.007,6.007,0,0,1,6-6h28a6.007,6.007,0,0,1,6,6v28A6.007,6.007,0,0,1-12649-8116Zm-26-21.5a1.5,1.5,0,0,0-1.5,1.5,1.5,1.5,0,0,0,1.5,1.5h19.681l-5.411,5.408a1.509,1.509,0,0,0,0,2.123,1.5,1.5,0,0,0,1.063.439,1.488,1.488,0,0,0,1.057-.439l7.859-7.855a1.591,1.591,0,0,0,.238-.242l1.025-1.021-9.193-8.043a1.513,1.513,0,0,0-.991-.372,1.5,1.5,0,0,0-1.128.512,1.507,1.507,0,0,0,.14,2.12l5,4.367Z' transform='translate(13206 9575)'/></g></g></svg>",
    navigate_before: "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z'/></svg>",
    navigate_next: "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z'/></svg>",
    chevron_left: "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z'/></svg>",
    chevron_right: "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z'/></svg>"
  };
}
