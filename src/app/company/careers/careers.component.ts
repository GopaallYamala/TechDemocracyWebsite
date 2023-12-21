import { AfterViewInit, Component, HostListener, OnInit, QueryList, Renderer2, ViewChildren, ViewEncapsulation } from "@angular/core";
import { AnimationDefinitions } from "src/shared/animations";

@Component({
  selector: 'careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [AnimationDefinitions]
})

export class CareersComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }

  @ViewChildren('elm1, elm2, elm3') elms: QueryList<any>;

  detectedElms = [];
  isScroll: boolean = false;

  detectElms() {
    const detectedElms: any = []
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElms.push(elm.nativeElement.id)
      }
    })
    this.detectedElms = detectedElms;
    if (this.detectedElms.length === 3 && !this.isScroll) {
      this.animateValue(document.getElementById('IdentityManaged'));
      this.animateValue(document.getElementById('SuccessfulIDM'));
      this.animateValue(document.getElementById('ActiveCurrentEngagements'));
      this.animateValue(document.getElementById('DedicatedHeadcount'));
      this.isScroll = true;
    }
  }

  ngAfterViewInit() {
    setTimeout(this.detectElms.bind(this))
  }


  upcomingEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  careersUsData = {
    title: 'Careers',
    heading: 'Take the First Step Towards a Bright Future',
    subHeading: 'A career with us is more than a job – it\'s an opportunity for growth and success.',
    solutionName: '',
    displayBtn: false,
    solutionContent: '',
    solutionImg: '../../assets/images/heroimages/Career.png'
  }

  achivedCardsArr = [
    { value: '5 Millions+', id: 'IdentityManaged', desc: 'User Identity managed since inception' }, { value: '100+', id: 'SuccessfulIDM', desc: 'SuccessfulIDM, CyberSec Implementation' },
    { value: '30+', id: 'ActiveCurrentEngagements', desc: 'Active current engagements in identity security' }, { value: '23+', id: 'DedicatedHeadcount', desc: 'Years of experience in Cyber Security' }
  ]

  ngOnInit() {
    this.animateValue(document.getElementById('value'));
  }

  animateValue(obj: any, start = 0, end: any = null, duration = 3000) {
    if (obj) {
      // save starting text for later (and as a fallback text if JS not running and/or google)
      var textStarting = obj.innerHTML;
      // remove non-numeric from starting text if not specified
      end = end || parseInt(textStarting.replace(/\D/g, ""));
      var range = end - start;
      // no timer shorter than 50ms (not really visible any way)
      var minTimer = 50;
      // calc step time to show all interediate values
      var stepTime = Math.abs(Math.floor(duration / range));
      // never go below minTimer
      stepTime = Math.max(stepTime, minTimer);
      // get current time and calculate desired end time
      var startTime = new Date().getTime();
      var endTime = startTime + duration;
      var timer: any;
      function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        // replace numeric digits only in the original string
        obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
        if (value == end) {
          clearInterval(timer);
        }
      }
      timer = setInterval(run, stepTime);
      run();
    }
  }
  emitted = false;
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.isScroll = false;
      // this.scrollingFinished.emit();
    } else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }
  }

}

function isInViewport(elm: any) {
  var elementTop = elm.offsetTop;
  var elementBottom = elementTop + elm.offsetHeight;

  // in this specific case the scroller is document.documentElement (<html></html> node)
  var viewportTop = document.documentElement.scrollTop;
  var viewportBottom = viewportTop + document.documentElement.clientHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
