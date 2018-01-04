import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedDetailsComponent } from './nested.details.component';
import { NestedHomeComponent } from './nested.home.component';

const memberRoutes: Routes = [
    // { path: '', redirectTo: '/nestedhome', pathMatch: 'full' },
    {
        path: '',
        component: NestedHomeComponent,
        children: [
            {
                path: ':id',
                component: NestedDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(memberRoutes)],
    declarations: [NestedHomeComponent, NestedDetailsComponent]
})
export class NestedModule { }


