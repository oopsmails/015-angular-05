import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule
  ],
  declarations: []
})
export class SharedModule { }
