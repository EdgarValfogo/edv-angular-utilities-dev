import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EdvModule } from 'edv';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EdvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
