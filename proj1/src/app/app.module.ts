import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropsComponent } from './props/props.component';
import { HeroDetailComponent } from './hero.detail/hero.detail.component';

@NgModule({
  declarations: [AppComponent, PruebaComponent, PropsComponent, HeroDetailComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
