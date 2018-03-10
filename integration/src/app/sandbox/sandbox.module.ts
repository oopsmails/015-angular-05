import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LiveDataComponent } from './components/change-detector/live-data/live-data.component';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { ParentComponent } from './components/parent/parent.component';
import { LoadingSvgComponent } from './components/svg-circle/loading-svg.component';
import { SvgCircleComponent } from './components/svg-circle/svg-circle.component';
import { JokeListParentComponent } from './components/view-child/joke-list-parent.component';
import { JokeListComponent } from './components/view-child/joke-list/joke-list.component';
import { JokeComponent } from './components/view-child/joke/joke.component';
import { MsgBetweenComponent } from './components/msg-between/msg-between.component';
import { FileDownloadIframeComponent } from './components/file-download-iframe/file-download-iframe.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'sandbox/parent',
        component: ParentComponent
      },
      {
        path: 'sandbox/svgcircleok',
        component: SvgCircleComponent
      },
      {
        path: 'sandbox/svgcircle',
        component: LoadingSvgComponent
      },
      {
        path: 'sandbox/jokelist',
        component: JokeListParentComponent
      }
    ])
  ],
  declarations: [ParentComponent,
    LiveDataComponent,
    JokeListParentComponent,
    JokeListComponent,
    JokeComponent,
    SvgCircleComponent,
    LoadingSvgComponent,
    FileDownloadComponent,
    MsgBetweenComponent,
    FileDownloadIframeComponent
  ]
})
export class SandboxModule { }
