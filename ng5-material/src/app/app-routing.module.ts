import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CanLoadMaterial } from './can-load-material';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'material',
    canLoad: [CanLoadMaterial],
    canActivate: [AuthGuard],
    loadChildren: 'app/material/material.module#MaterialModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
