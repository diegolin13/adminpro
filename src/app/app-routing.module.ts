import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
// Modulos
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './Auth/auth-routing.module';

import {NopagefoundComponent} from "./nopagefound/nopagefound.component";



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule,
     PagesRoutingModule,
    AuthRoutingModule ]
})
export class AppRoutingModule { }