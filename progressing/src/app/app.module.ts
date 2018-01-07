import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { RouterModule } from '@angular/router';

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
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProgressingHomeComponent } from './component/progressing-home/progressing-home.component';
import { BsNavbarComponent } from './component/bs-navbar/bs-navbar.component';
import { BloggerComponent } from './component/blogger/blogger.component';
import { PageThreeWaysComponent, Posts1Component, Posts2Component, Posts3Component } from './component/blogger/index';
import { HttpClientModule } from '@angular/common/http';

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
    ConsumingHttpComponent,
    NotFoundComponent,
    ProgressingHomeComponent,
    BsNavbarComponent,
    PageThreeWaysComponent, BloggerComponent, Posts1Component, Posts2Component, Posts3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FirstModuleModule,

    NgbModule.forRoot(),

    RouterModule.forRoot([
      { path: '', component: ProgressingHomeComponent, pathMatch: 'full' },
      // { path: 'followers/:username', component: GithubProfileComponent },
      // { path: 'followers', component: GithubFollowersComponent },
      { path: 'page', component: ConsumingHttpComponent },
      { path: '3ways', component: PageThreeWaysComponent },
      { path: '**', component: NotFoundComponent }
    ])
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
