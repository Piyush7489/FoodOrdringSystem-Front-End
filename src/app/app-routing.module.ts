import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin-panel/login/login.component';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  
  {path:'dashboard',component:AdminPortalComponent,
  canActivate:[adminGuard],
  children:[
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
