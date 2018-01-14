import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBsComponent } from './components/navbar-bs/navbar-bs.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavbarBsComponent, HomeComponent
  ],
  declarations: [NavbarBsComponent, HomeComponent]
})
export class CoreModule { }
