import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';

import { LoginComponent } from './Comman-components/login/login.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';

import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
 
 
  {path:'admin',component:AdminPortalComponent,
  
  children:[
    {path:'',component:AdmindeshboardMainContentComponent},
    {path:'view-restaurant',component:ViewRestaurantComponent},
    {path:'add-category',component:AddCategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
