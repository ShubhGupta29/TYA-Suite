import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TYAComponent } from './tya.component';
import { SignUpPageComponent } from './User-landing-Page/sign-up-page/sign-up-page.component';
import { SignUpPage2Component } from './User-landing-Page/sign-up-page2/sign-up-page2.component';
import { SignUpPage3Component } from './User-landing-Page/sign-up-page3/sign-up-page3.component';

const routes: Routes = [
  {path:'tya', component:TYAComponent, children: [
    {path:'', redirectTo:'signUp',pathMatch:'full'},
    {path:'signUp',component:SignUpPageComponent},
    {path:'signUp2',component:SignUpPage2Component},
    {path:'signUp3',component:SignUpPage3Component}
  ]},
  {path:'',redirectTo:'tya',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TyaRoutingModule { }
