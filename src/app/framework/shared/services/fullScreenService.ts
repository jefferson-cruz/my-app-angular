import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
   })
export class FullScreenService {
    private active:boolean;

    toggleFullScreen() {
        if (!this.checkbrowserSupport()) {
          throw 'Browser não suporta fullscreen';
        }
    
        let elem = document.body;
    
        if (!this.active) {
          this.openFullScreen(elem);
          this.active = true;
          return;
        }
    
        this.closeFullScreen(elem);
        this.active = false;
      }
    
      openFullScreen(elem: HTMLElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
    
          return;
        }
    
        if (elem['mozRequestFullScreen']) { /* Firefox */
          elem['mozRequestFullScreen']();
    
          return;
        }
    
        else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
          elem['webkitRequestFullscreen']();
    
          return
        }
    
        if (elem['msRequestFullscreen']) { /* IE/Edge */
          elem['msRequestFullscreen']();
    
          return
        }
      }
    
      closeFullScreen(elem: HTMLElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
    
          return;
        }
    
        if (document['mozCancelFullScreen']) { /* Firefox */
          document['mozCancelFullScreen']();
    
          return;
        }
    
        if (document['webkitExitFullscreen']) { /* Chrome, Safari and Opera */
          document['webkitExitFullscreen']();
    
          return;
        }
    
        if (document['msExitFullscreen']) { /* IE/Edge */
          document['msExitFullscreen']();
    
          return;
        }
      }
    
      checkbrowserSupport(): boolean {
        return document['fullscreenEnabled'] || document['webkitFullscreenEnabled'];
      }
    
      public fullScreenActive():boolean {
        return this.active;
      }
}