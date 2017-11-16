import { UsertokenService } from './service/usertoken/usertoken.service';
import { CoursesService } from './service/courses/courses.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { FirstModuleModule } from './modules/first-module/first-module.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirstModuleModule
  ],
  providers: [
    CoursesService,
    UsertokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
