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
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { adminGuard } from './guard/admin.guard';
import { SignupComponent } from './Comman-components/signup/signup.component';
import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';
import { OwnerportalComponent } from './owner/ownerportal/ownerportal.component';
import { OwnerSideBarComponent } from './owner/owner-side-bar/owner-side-bar.component';

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
    OwnerportalComponent,
    OwnerSideBarComponent,
  

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
