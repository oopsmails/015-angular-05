import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
import { ProgressingHomeComponent } from './components/progressing-home/progressing-home.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
          {
            path: 'progressing/home',
            component: ProgressingHomeComponent
          }
        ])
    ],
    declarations: [
        ProgressingHomeComponent
    ]
})
export class ProgressingModule { }
