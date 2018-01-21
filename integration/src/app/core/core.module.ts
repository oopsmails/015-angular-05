import { SharedModule } from 'shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBsComponent } from './components/navbar-bs/navbar-bs.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarBsComponent, HomeComponent
  ],
  declarations: [NavbarBsComponent, HomeComponent]
})
export class CoreModule { }
