import { Component, HostListener, Input } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';
import {VgStreamingModule } from '@videogular/ngx-videogular/streaming';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent {
  api: VgApiService = new VgApiService;

  @Input() src:string = "";


  currentVideo: any = {
    name: 'Video one',
    src: this.src,
    type: 'video/mp4'
  }

  onPlayerReady(source: VgApiService) {
    this.api = source;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.autoplay.bind(this)
    )
  }

  autoplay() {
    //this.api.play();
  }

}
