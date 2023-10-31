import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChauComponent } from './chau/chau.component';
import { RoutingModule } from './routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ChauComponent, PageNotFoundComponent, UnoComponent, DosComponent],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
