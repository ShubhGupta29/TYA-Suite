import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TYAComponent } from './tya.component';
import { SignUpPageComponent } from './User-landing-Page/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {path:'tya', component:TYAComponent, children: [
    {path:'', redirectTo:'signUp',pathMatch:'full'},
    {path:'signUp',component:SignUpPageComponent}
  ]},
  {path:'',redirectTo:'tya',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TyaRoutingModule { }
