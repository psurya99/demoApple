import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { IntlComponent } from './components/Intl.component';
import { workComponent } from './components/WorkPlace.component';
import { InsightComponent } from './components/Insights.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, AboutComponent, HomeComponent,IntlComponent,workComponent,InsightComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
