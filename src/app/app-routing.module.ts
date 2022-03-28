import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './common/about-page/about-page.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { LoginFormComponent } from './common/login-form/login-form.component';
import { SigninFormComponent } from './common/signin-form/signin-form.component';


const routes: Routes = [
  {path:"login",component:LoginFormComponent},
  {path:"signin",component:SigninFormComponent},
  {path:"about",component:AboutPageComponent},
  {path:"home",component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
