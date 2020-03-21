import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FullScreenService } from '../framework/shared/services/fullScreenService';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: []
})
export class FullscreenComponent implements OnInit {
  public active: boolean

  /**
   *
   */
  constructor(private fullScreenService: FullScreenService) {
  } 

  @Output() fullscreen =  new EventEmitter()

  ngOnInit(): void {
    this.active = false;
  }

  toggleFullScreen() {
    this.fullScreenService.toggleFullScreen();
  }

  // openFullScreen(elem: HTMLElement) {
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();

  //     return;
  //   }

  //   if (elem['mozRequestFullScreen']) { /* Firefox */
  //     elem['mozRequestFullScreen']();

  //     return;
  //   }

  //   else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
  //     elem['webkitRequestFullscreen']();

  //     return
  //   }

  //   if (elem['msRequestFullscreen']) { /* IE/Edge */
  //     elem['msRequestFullscreen']();

  //     return
  //   }
  // }

  // closeFullScreen(elem: HTMLElement) {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();

  //     return;
  //   }

  //   if (document['mozCancelFullScreen']) { /* Firefox */
  //     document['mozCancelFullScreen']();

  //     return;
  //   }

  //   if (document['webkitExitFullscreen']) { /* Chrome, Safari and Opera */
  //     document['webkitExitFullscreen']();

  //     return;
  //   }

  //   if (document['msExitFullscreen']) { /* IE/Edge */
  //     document['msExitFullscreen']();

  //     return;
  //   }
  // }

  // checkbrowserSupport(): boolean {
  //   return document['fullscreenEnabled'] || document['webkitFullscreenEnabled'];
  // }

  // fullScreenState() {
  //   this.fullscreen
  // }
}

