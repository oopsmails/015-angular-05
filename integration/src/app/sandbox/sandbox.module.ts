import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ParentComponent]
})
export class SandboxModule { }
