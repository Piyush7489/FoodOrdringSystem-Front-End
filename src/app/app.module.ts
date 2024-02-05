import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';






import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './Comman-components/login/login.component';
import { NavBarComponent } from './Comman-components/nav-bar/nav-bar.component';
import { RightSideBarComponent } from './Comman-components/right-side-bar/right-side-bar.component';
import { SignupComponent } from './Comman-components/signup/signup.component';
import { authInterceptorProviders } from './Utils/token.interceptor';
import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';
import { SideBarComponent } from './admin-panel/side-bar/side-bar.component';
import { adminGuard } from './guard/admin.guard';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import { VerifyOtpComponent } from './Comman-components/verify-otp/verify-otp.component';



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
    VerifyOtpComponent

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
    MatButtonModule

  ],
  providers: [authInterceptorProviders,adminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
