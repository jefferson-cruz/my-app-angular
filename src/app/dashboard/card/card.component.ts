import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ]
})
export class CardComponent implements OnInit {

  @Input() ammount:string;
  @Input() iconClass:string;
  @Input() displayText:string;
  @Input() percentage:number
  @Input() backgroundColor:string
  @Input() fontColor:string
  @Input() class:string
  @Input() routerLink:Router

  constructor() { }

  ngOnInit(): void {
    this.ammount = this.ammount === undefined || this.ammount === null ? '&nbsp;' : this.ammount
  }

}
