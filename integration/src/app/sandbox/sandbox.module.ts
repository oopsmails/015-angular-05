import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LiveDataComponent } from './components/change-detector/live-data/live-data.component';
import { ParentComponent } from './components/parent/parent.component';
import { JokeListComponent } from './components/view-child/joke-list/joke-list.component';
import { JokeComponent } from './components/view-child/joke/joke.component';

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
  declarations: [ParentComponent, LiveDataComponent, JokeListComponent, JokeComponent]
})
export class SandboxModule { }
