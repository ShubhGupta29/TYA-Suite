import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TYAComponent } from './tya/tya.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TyaModule } from './tya/tya.module';

@NgModule({
  declarations: [
    AppComponent,
    TYAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TyaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
