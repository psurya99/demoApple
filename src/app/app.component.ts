import { Component } from "@angular/core";
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
// import { IntlComponent } from './components/Intl.component';
// import { workComponent } from './components/WorkPlace.component';
// import { InsightComponent } from './components/Insights.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {  showNavbar(e:any) {
  e.target.classList.add('show');
}
removeNavbar(e:any) {
  e.target.classList.remove('show');
}}