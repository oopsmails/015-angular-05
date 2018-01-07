import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatSortModule, MatTableModule, MatToolbarModule, MatIconModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from '../shared/services/product.service';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        , MatIconModule
        , RouterModule
        , BrowserModule
        , BrowserAnimationsModule
        , FormsModule
        , HttpClientModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule
        , MatProgressSpinnerModule, MatCardModule, MatTableModule
        , MatPaginatorModule
        , MatSortModule
        , MatIconModule
        , ProductListComponent
    ],
    declarations: [
        ProductListComponent
    ],
    providers: [
        ProductService
    ]
})
export class MaterialModule { }
