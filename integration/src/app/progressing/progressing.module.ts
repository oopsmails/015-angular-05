import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { ConsumingHttpComponent } from './components/consuming-http/consuming-http.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { Pagination2Component } from './components/pagination/pagination2.component';
import { ProgressingHomeComponent } from './components/progressing-home/progressing-home.component';
import { ApplicationLoadingDirective } from './directive/appication-loading.directive';
import { CardhoverDirective } from './directive/cardhover.directive';
import { InputFormatDirective } from './directive/input-format.directive';
import { MouseOverColorDirective } from './directive/mouseover-color.directive';

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
        ])
    ],
    declarations: [
        ProgressingHomeComponent,
        ConsumingHttpComponent,
        PaginationComponent,
        Pagination2Component,

        InputFormatDirective,
        ApplicationLoadingDirective,
        MouseOverColorDirective,
        CardhoverDirective
    ],
    exports: [
        ProgressingHomeComponent,
        PaginationComponent,
        Pagination2Component,

        InputFormatDirective,
        ApplicationLoadingDirective,
        MouseOverColorDirective,
        CardhoverDirective
    ]
})
export class ProgressingModule { }
