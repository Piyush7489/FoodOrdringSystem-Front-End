import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-panel/admin-portal/admin-portal.component';
import { LoginComponent } from './admin-panel/login/login.component';
import { NavBarComponent } from './admin-panel/nav-bar/nav-bar.component';
import { SideBarComponent } from './admin-panel/side-bar/side-bar.component';
import { RightSideBarComponent } from './admin-panel/right-side-bar/right-side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule }from '@angular/common/http'; 
import { authInterceptorProviders } from './Utils/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    LoginComponent,
    NavBarComponent,
    SideBarComponent,
    RightSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
