import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LiveDataComponent } from './components/live-data/live-data.component';
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
  declarations: [ParentComponent, LiveDataComponent]
})
export class SandboxModule { }
