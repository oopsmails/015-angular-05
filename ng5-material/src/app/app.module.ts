import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MockBackendModule } from './mock-backend/mock-backend.module';
import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth-guard';
import { CanLoadMaterial } from './can-load-material';


// const appRoutes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   {
//     path: 'material',
//     canLoad: [CanLoadProjects],
//     canActivate: [AuthGuard],
//     loadChildren: 'app/material.module#MaterialModule'
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MockBackendModule.forRoot(),
    MaterialModule
    // , RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
    , CanLoadMaterial
    , AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
