import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModuleComponent } from './first-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstModuleComponent],
  exports: [
    FirstModuleComponent // <-- this!
  ]
})
export class FirstModuleModule { }
