import { Component, OnInit, Input } from '@angular/core';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar-item-dropdown',
  templateUrl: './navbar-item-dropdown.component.html',
})
export class NavbarItemDropdownComponent extends NavbarItemComponent implements OnInit {

  @Input() displayText:string;
  @Input() iconClass:string;

  constructor() { super(); }

  ngOnInit(): void {
  }


}
