import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';


import { LoginComponent } from './Comman-components/login/login.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';

import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';
import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
 
 
  {path:'admin',component:AdminPortalComponent,
  
  children:[
    {path:'',component:AdmindeshboardMainContentComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'view-category',component:ViewAllCategoryComponent},
    {path:'view-restaurant',component:ViewRestaurantComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
