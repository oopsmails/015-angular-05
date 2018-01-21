import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'sandbox/parent',
        component: ParentComponent
      }
    ])
  ],
  declarations: [ParentComponent]
})
export class SandboxModule { }
