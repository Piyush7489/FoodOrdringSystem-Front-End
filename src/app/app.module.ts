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
import { SideBarComponent } from './Comman-components/side-bar/side-bar.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './Comman-components/login/login.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule }from '@angular/common/http'; 
import { authInterceptorProviders } from './Utils/token.interceptor';
import { LoginComponent } from './Comman-components/login/login.component';
import { NavBarComponent } from './Comman-components/nav-bar/nav-bar.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { RightSideBarComponent } from './Comman-components/right-side-bar/right-side-bar.component';
import { ViewRestaurantComponent } from './admin-panel/restaurant/view-restaurant/view-restaurant.component';
import {MatCardModule} from '@angular/material/card';
import { AdmindeshboardMainContentComponent } from './admin-panel/admindeshboard-main-content/admindeshboard-main-content.component';
import { SideBarComponent } from './admin-panel/side-bar/side-bar.component';
import { AddCategoryComponent } from './admin-panel/Category/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewAllCategoryComponent } from './admin-panel/Category/view-all-category/view-all-category.component';
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
    ViewAllCategoryComponent
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
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
