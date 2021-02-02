import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const rootRouterConfig: Routes = [
    { 
        path: '', component: AdminDashboardComponent,
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(rootRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRouteModule{}