import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
})
export class NavbarItemComponent implements OnInit {
  @Input() routerLink: Router

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  public enable(event: Event): void {
    this.disableAll();

    (event.target as Element).parentElement.classList.add('active');
  }

  private disableAll() {
    document.querySelectorAll(".nav-item.active").forEach(element => {
      element.classList.remove("active");
    });
  }
}
