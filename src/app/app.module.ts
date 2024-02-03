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
@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    NavBarComponent,
    LoginComponent,
    SideBarComponent,
    RightSideBarComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
