import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataProviderService } from 'shared/services/data-provider.service';
import { WINDOW_PROVIDERS } from 'shared/services/window-provider.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot().ngModule
  ],
  declarations: [],
  providers: [
    DataProviderService,
    WINDOW_PROVIDERS
  ]
})
export class SharedModule { }
