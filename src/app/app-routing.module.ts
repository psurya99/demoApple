import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about.component';
import { HomeComponent } from './components/home.component';
import { IntlComponent } from './components/Intl.component';
import { workComponent } from './components/WorkPlace.component';
import { InsightComponent } from './components/Insights.component'

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Connections', component: AboutComponent },
  { path: 'Intelligence', component: IntlComponent },
  { path: 'WorkPlace', component: workComponent },
  { path: 'Insights', component: InsightComponent}
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}