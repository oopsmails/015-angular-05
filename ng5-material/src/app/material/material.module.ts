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
import { BrowserModule } from '@angular/platform-browser';
import { StockComponent } from './components/stock/stock.component';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        , BrowserModule
        , BrowserAnimationsModule
        , FormsModule
        , HttpClientModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        , UsertableComponent
        , BasicComponent
        , StockComponent
    ],
    declarations: [UsertableComponent
        , BasicComponent
        , StockComponent
    ],
})
export class MaterialModule { }
