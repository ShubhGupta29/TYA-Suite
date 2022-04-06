import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TyaRoutingModule } from './tya-routing.module';
import { AppMaterialModule } from '../Shared/Modules/app-material/app-material.module';
import { AppBootstrapModule } from '../Shared/Modules/app-bootstrap/app-bootstrap.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TyaRoutingModule,
    AppMaterialModule,
    AppBootstrapModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports:[
  ]
})
export class TyaModule { }
