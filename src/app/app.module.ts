import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TYAComponent } from './tya/tya.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TyaModule } from './tya/tya.module';
import { AppMaterialModule } from 'src/app/Shared/Modules/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TYAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TyaModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
