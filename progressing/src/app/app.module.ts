import { StepComponent } from './component/steps/step.component';
import { Pagination2Component } from './component/pagination/pagination2.component';
import { UsertokenService } from './service/usertoken/usertoken.service';
import { CoursesService } from './service/courses/courses.service';
import { PostsService } from './service/posts/posts.service';
import { HttpDataService } from './service/http-data.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';

import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { FirstModuleModule } from './modules/first-module/first-module.module';
import { PaginationComponent } from './component/pagination/pagination.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { NewcourseFormComponent } from './component/newcourse-form/newcourse-form.component';
import { StepsComponent } from './component/steps/steps.component';
import { CardhoverDirective } from './directive/cardhover.directive';
import { CardHostingComponent } from './component/card-hosting/card-hosting.component';
import { CardComponent } from './component/card-hosting/card.component';
import { ConsumingHttpComponent } from './component/consuming-http/consuming-http.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PaginationComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewcourseFormComponent,
    Pagination2Component,
    StepsComponent,
    StepComponent,
    CardhoverDirective,
    CardHostingComponent,
    CardComponent,
    ConsumingHttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FirstModuleModule
  ],
  providers: [
    CoursesService,
    UsertokenService,
    HttpDataService,
    PostsService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
