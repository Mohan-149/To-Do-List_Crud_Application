import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';         // 👈 Needed for ngForm and ngModel
import { CommonModule } from '@angular/common';       // 👈 Needed for ngFor

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    CommonModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }