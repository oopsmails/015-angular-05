import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LiveDataComponent } from './components/change-detector/live-data/live-data.component';
import {
    FileDownloadIframeComponent
} from './components/file-download-iframe/file-download-iframe.component';
import { FileDownloadComponent } from './components/file-download/file-download.component';
import { MsgBetweenComponent } from './components/msg-between/msg-between.component';
import { SandboxHomeComponent } from './components/sandbox-home/sandbox-home.component';
import { LoadingSvgComponent } from './components/svg-circle/loading-svg.component';
import { SvgCircleComponent } from './components/svg-circle/svg-circle.component';
import { JokeListParentComponent } from './components/view-child/joke-list-parent.component';
import { JokeListComponent } from './components/view-child/joke-list/joke-list.component';
import { JokeComponent } from './components/view-child/joke/joke.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'sandbox/home',
        component: SandboxHomeComponent
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
  declarations: [
    SandboxHomeComponent,
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
