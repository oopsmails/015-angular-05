import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import {
    BloggerComponent, PageThreeWaysComponent, Posts1Component, Posts2Component, Posts3Component
} from './components/blogger/index';
import { CardHostingComponent } from './components/card-hosting/card-hosting.component';
import { CardComponent } from './components/card-hosting/card.component';
import { ConsumingHttpComponent } from './components/consuming-http/consuming-http.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Pagination2Component } from './components/pagination/pagination2.component';
import { ProgressingHomeComponent } from './components/progressing-home/progressing-home.component';
import { StepComponent } from './components/steps/step.component';
import { StepsComponent } from './components/steps/steps.component';
import { ApplicationLoadingDirective } from './directive/appication-loading.directive';
import { CardhoverDirective } from './directive/cardhover.directive';
import { InputFormatDirective } from './directive/input-format.directive';
import { MouseOverColorDirective } from './directive/mouseover-color.directive';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { NewcourseFormComponent } from './components/newcourse-form/newcourse-form.component';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'progressing/home',
                component: ProgressingHomeComponent
            },
            {
                path: 'progressing/pagination',
                component: ConsumingHttpComponent
            },
            {
                path: 'progressing/3ways',
                component: PageThreeWaysComponent
            }
        ])
    ],
    declarations: [
        ProgressingHomeComponent,
        ConsumingHttpComponent,
        PaginationComponent,
        Pagination2Component,
        PageThreeWaysComponent, BloggerComponent, Posts1Component, Posts2Component, Posts3Component,
        NotFoundComponent,
        StepsComponent,
        StepComponent,
        CardHostingComponent,
        CardComponent,
        FavoriteComponent,
        ContactFormComponent,
        SignupFormComponent,
        NewcourseFormComponent,
        CoursesComponent,

        InputFormatDirective,
        ApplicationLoadingDirective,
        MouseOverColorDirective,
        CardhoverDirective
    ],
    exports: [
        ProgressingHomeComponent,
        PaginationComponent,
        Pagination2Component,
        PageThreeWaysComponent, BloggerComponent, Posts1Component, Posts2Component, Posts3Component,
        NotFoundComponent,
        StepsComponent,
        StepComponent,
        CardHostingComponent,
        CardComponent,
        FavoriteComponent,
        ContactFormComponent,
        SignupFormComponent,
        NewcourseFormComponent,
        CoursesComponent,

        InputFormatDirective,
        ApplicationLoadingDirective,
        MouseOverColorDirective,
        CardhoverDirective
    ]
})
export class ProgressingModule { }
