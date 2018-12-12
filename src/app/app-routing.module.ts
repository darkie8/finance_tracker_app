import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-entry/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: '', component: LoginComponent },
{ path: '*', component: LoginComponent },
{path: 'dashboard/:name', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
