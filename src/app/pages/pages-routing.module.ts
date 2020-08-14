import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {path: 'dashboard',
     component: PagesComponent,
     children: [
       {path: '', component: DashboardComponent, data: {title: 'DashBoard'}},
       {path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'}},
       {path: 'grafica1', component: Grafica1Component, data: {title: 'Gráficas'}},
       {path: 'account-settings', component: AccountsettingsComponent, data: {title: 'Ajustes'}},
       {path: 'promises', component: PromisesComponent, data: {title: 'Promesas'}},
       {path: 'rxjs', component: RxjsComponent, data: {title: 'Observables'}},
     ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }