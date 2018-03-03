import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/core/components/home/home.component';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProgressingModule } from './progressing/progressing.module';
import { ParentComponent } from './sandbox/components/parent/parent.component';
import { SandboxModule } from './sandbox/sandbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    SandboxModule,
    ProgressingModule,
    RouterModule.forRoot([
      { path: '', component: ParentComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
