import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';
import { LoginComponent } from './Comman-components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  
  {path:'admin',component:AdminPortalComponent,
  
  children:[
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
