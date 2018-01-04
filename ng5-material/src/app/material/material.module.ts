import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule, MatToolbarModule
} from '@angular/material';
import { BasicComponent } from './components/basic/basic.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';
import { StockComponent } from './components/stock/stock.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialHomeComponent } from './components/material-home/material-home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialChildComponent } from './components/material-home/material-child.component';
// import { NestedModule } from '../nested-components/nested.module';

const materialRoutes: Routes = [
    // { path: '', redirectTo: '/materialhome', pathMatch: 'full' }
    // , { path: '', redirectTo: '/materialhome', pathMatch: 'full' }

    {
        path: 'datatable',
        component: UsertableComponent
    }
    ,
    {
        path: 'stock',
        component: StockComponent
    },
    {
        path: 'dialog',
        component: DialogComponent
    },
    {
        path: '',
        component: MaterialHomeComponent
        , children: [
            {
                path: ':id',
                component: MaterialChildComponent,
                children: [
                    {
                        path: 'nested',
                        loadChildren: 'app/nested-components/nested.module#NestedModule'
                    }
                ]
            }
        ]
    }
    // , {
    //     path: 'nested',
    //     loadChildren: 'app/nested-components/nested.module#NestedModule'
    //   }
    // , {
    //     path: 'datatable',
    //     component: UsertableComponent
    // }
];


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        // , BrowserModule
        // , BrowserAnimationsModule
        , CommonModule
        , FormsModule
        , HttpClientModule
        , RouterModule.forChild(materialRoutes)
        // , NestedModule
    ],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        , UsertableComponent
        , BasicComponent
        , StockComponent
        , DialogComponent
        , MaterialHomeComponent
        , MaterialChildComponent
    ],
    declarations: [UsertableComponent
        , BasicComponent
        , StockComponent, DialogComponent, MaterialHomeComponent
        , MaterialChildComponent
    ],
})
export class MaterialModule { }
