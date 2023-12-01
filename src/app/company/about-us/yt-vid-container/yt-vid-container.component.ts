import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'yt-vid-container',
  templateUrl: './yt-vid-container.component.html',
  styleUrls: ['./yt-vid-container.component.scss']
})

export class YoutubeVidContainerComponent {
  safeURL;
  videoUrl = `https://www.youtube.com/watch?v=mgMhoY4r0dU&t=6s`;

  constructor(
    private _sanitizer: DomSanitizer) {

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
