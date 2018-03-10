import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoursesService } from 'shared/services/courses/courses.service';
import { DataProviderService } from 'shared/services/data-provider.service';
import { FileDownloadService } from 'shared/services/file-download/file-download.service';
import { HttpDataService } from 'shared/services/http-data.service';
import { MsgBetweenService } from 'shared/services/msg-between/msg-between.service';
import { PostsService } from 'shared/services/posts/posts.service';
import { UsertokenService } from 'shared/services/usertoken/usertoken.service';
import { WINDOW_PROVIDERS } from 'shared/services/window-provider.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot().ngModule
  ],
  declarations: [],
  providers: [
    DataProviderService,
    WINDOW_PROVIDERS,
    CoursesService,
    PostsService,
    UsertokenService,
    HttpDataService,
    MsgBetweenService,
    FileDownloadService
  ]
})
export class SharedModule { }
