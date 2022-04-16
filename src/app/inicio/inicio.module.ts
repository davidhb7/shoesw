import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    AuthModule,
    RouterModule
  ]
})
export class InicioModule { }
