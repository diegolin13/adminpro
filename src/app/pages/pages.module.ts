import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
// Modulos personalizados
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';






@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent
  ],
  exports: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DashboardComponent
  ],
  imports: [
    SharedModule,    
    ComponentsModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
