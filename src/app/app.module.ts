import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';






import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule }from '@angular/common/http'; 
import { authInterceptorProviders } from './Utils/token.interceptor';
import { NavBarComponent } from './Comman-components/nav-bar/nav-bar.component';
import { RightSideBarComponent } from './Comman-components/right-side-bar/right-side-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './Comman-components/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';
import { SideBarComponent } from './admin-panel/side-bar/side-bar.component';
import { adminGuard } from './guard/admin.guard';

import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import { VerifyOtpComponent } from './Comman-components/verify-otp/verify-otp.component';


import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './Comman-components/signup/signup.component';
import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';
import { OwnerportalComponent } from './owner/ownerportal/ownerportal.component';
import { OwnerSideBarComponent } from './owner/owner-side-bar/owner-side-bar.component';
import { UpdateUserComponent } from './Comman-components/update-user/update-user.component';
import { ForgetPasswordComponent } from './Comman-components/forget-password/forget-password.component';
import { HOMEComponent } from './Comman-components/home/home.component';
import { PaginationComponent } from './Comman-components/pagination/pagination/pagination.component';
import { OenerPanelMaincontentComponent } from './owner/oener-panel-maincontent/oener-panel-maincontent.component';
import { ownerGuard } from './guard/owner-guard.guard';
import { RegisterRestaurantComponent } from './owner/restaurant-managment/register-restaurant/register-restaurant.component';
import { OwnerViewRestaurantComponent } from './owner/restaurant-managment/owner-view-restaurant/owner-view-restaurant.component';
import { AddFoodComponent } from './owner/food-managment/add-food/add-food.component';
import { ViewFoodComponent } from './owner/food-managment/view-food/view-food.component';
import { VerificationOtpForForgetPasswordComponent } from './Comman-components/verification-otp-for-forget-password/verification-otp-for-forget-password.component';
import { NewPassForForgetPassComponent } from './Comman-components/new-pass-for-forget-pass/new-pass-for-forget-pass.component';
import { ChanggPassComponent } from './Comman-components/changg-pass/changg-pass.component';
import { ViewCustomerComponent } from './admin-panel/view-customer/view-customer.component';
import { ViewOwnersComponent } from './admin-panel/view-owners/view-owners.component';

import { MatSelectModule } from '@angular/material/select';
import { SliceWordPipe } from './custom-pipe/slice-word.pipe';
import { ViewRestaurantByOwnerComponent } from './owner/view-restaurant-by-owner/view-restaurant-by-owner.component';
import { StatusCountPipe } from './custom-pipe/status-count.pipe';
import { BoydocumentComponent } from './delivery-boy-panel/boy-document-registration/boydocument/boydocument.component';
import { ViewDeliveryBoyComponent } from './admin-panel/view-delivery-boy/view-delivery-boy.component';
import { ViewReviewComponent } from './admin-panel/view-review/view-review.component';
import { DateAgoPipePipe } from './custom-pipe/date-ago-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    NavBarComponent,
    LoginComponent,
    SideBarComponent,
    RightSideBarComponent,
    ViewRestaurantComponent,
    AddCategoryComponent,
    AdmindeshboardMainContentComponent,
    SignupComponent,
    ViewAllCategoryComponent,
    VerifyOtpComponent,
    OwnerportalComponent,
    OwnerSideBarComponent,
    UpdateUserComponent,
    ForgetPasswordComponent,
    HOMEComponent,
    PaginationComponent,
    OenerPanelMaincontentComponent,
    RegisterRestaurantComponent,
    OwnerViewRestaurantComponent,
    AddFoodComponent,
    ViewFoodComponent,
    VerificationOtpForForgetPasswordComponent,
    NewPassForForgetPassComponent,
    ChanggPassComponent,
    ViewCustomerComponent,
    ViewOwnersComponent,
    SliceWordPipe,
    ViewRestaurantByOwnerComponent,
    StatusCountPipe,
    BoydocumentComponent,
    ViewDeliveryBoyComponent,
    ViewReviewComponent,
    DateAgoPipePipe
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule

  ],
  providers: [authInterceptorProviders,adminGuard,ownerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
