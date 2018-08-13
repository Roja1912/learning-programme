import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveForms} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalciComponent } from './calci/calci.component';

@NgModule({
  declarations: [
    AppComponent,
    CalciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveForms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
