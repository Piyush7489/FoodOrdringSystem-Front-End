import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';

import { LoginComponent } from './Comman-components/login/login.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';
import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';

import { adminGuard } from './guard/admin.guard';
import { SignupComponent } from './Comman-components/signup/signup.component';

import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';
import { OwnerportalComponent } from './owner/ownerportal/ownerportal.component';
import { VerifyOtpComponent } from './Comman-components/verify-otp/verify-otp.component';
import { otpGuard } from './guard/otp.guard';
import { authGuard } from './guard/auth.guard';
import { ForgetPasswordComponent } from './Comman-components/forget-password/forget-password.component';
import { HOMEComponent } from './Comman-components/home/home.component';
import { BoydocumentComponent } from './boy-document-registration/boydocument/boydocument.component';
import { ownerGuard } from './guard/owner-guard.guard';
import { OenerPanelMaincontentComponent } from './owner/oener-panel-maincontent/oener-panel-maincontent.component';
import { RegisterRestaurantComponent } from './owner/restaurant-managment/register-restaurant/register-restaurant.component';
import { OwnerViewRestaurantComponent } from './owner/restaurant-managment/owner-view-restaurant/owner-view-restaurant.component';
import { AddFoodComponent } from './owner/food-managment/add-food/add-food.component';
import { ViewFoodComponent } from './owner/food-managment/view-food/view-food.component';
import { VerificationOtpForForgetPasswordComponent } from './Comman-components/verification-otp-for-forget-password/verification-otp-for-forget-password.component';
import { NewPassForForgetPassComponent } from './Comman-components/new-pass-for-forget-pass/new-pass-for-forget-pass.component';
import { ChanggPassComponent } from './Comman-components/changg-pass/changg-pass.component';
import { ViewCustomerComponent } from './admin-panel/view-customer/view-customer.component';
import { ViewOwnersComponent } from './admin-panel/view-owners/view-owners.component';




const routes: Routes = [
  {path:'',component:HOMEComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'boy-document-registration',component:BoydocumentComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'change-pass',component:ChanggPassComponent},
  {path:'verify-otp-for-forget-password' ,component:VerificationOtpForForgetPasswordComponent},
  {path:'new-pass',component:NewPassForForgetPassComponent},
  {path:'verify-otp',component:VerifyOtpComponent,canActivate:[otpGuard]},

  {path:'admin',component:AdminPortalComponent,
    canActivate:[adminGuard],
    children:[
    {path:'',component:AdmindeshboardMainContentComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'view-category',component:ViewAllCategoryComponent},
    {path:'view-restaurant',component:ViewRestaurantComponent},
    {path:'customer-list',component:ViewCustomerComponent},
    {path:'owner-list',component:ViewOwnersComponent},
  ]},
  {path:'owner',component:OwnerportalComponent,
   canActivate:[ownerGuard],
   children:[
    {path:'',component: OenerPanelMaincontentComponent},
    {path:'add-restaurant',component:RegisterRestaurantComponent},
    {path:'view-restaurant',component:OwnerViewRestaurantComponent},
    {path:'add-food',component:AddFoodComponent},
    {path:'view-food',component:ViewFoodComponent},
    
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
