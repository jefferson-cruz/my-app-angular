import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router'
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { NavbarItemDropdownComponent } from './navbar/navbar-item-dropdown/navbar-item-dropdown.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { CardComponent } from './dashboard/card/card.component';
import { GraficoComponent } from './dashboard/grafico/grafico.component';
import { CardDetailComponent } from './dashboard/card-detail/card-detail.component';
import { BreadcumbComponent } from './breadcumb/breadcumb.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';

const routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/embossing/details', component: CardDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    NavbarItemDropdownComponent,
    DropdownMenuComponent,
    DashboardComponent,
    CardComponent,
    GraficoComponent,
    CardDetailComponent,
    BreadcumbComponent,
    FullscreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
