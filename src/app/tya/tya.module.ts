import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyaRoutingModule } from './tya-routing.module';
import { AppMaterialModule } from '../Shared/Modules/app-material/app-material.module';
import { AppBootstrapModule } from '../Shared/Modules/app-bootstrap/app-bootstrap.module';
import { SignUpPageComponent } from './User-landing-Page/sign-up-page/sign-up-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    TyaRoutingModule,
    AppMaterialModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports:[
  ]
})
export class TyaModule { }
