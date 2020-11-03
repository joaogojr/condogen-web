import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//imports
import { AppViewsModule } from './views/views.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
