import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './common/about-page/about-page.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';
import { SigninFormComponent } from './common/signin-form/signin-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent,
    LoginFormComponent,
    SigninFormComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
