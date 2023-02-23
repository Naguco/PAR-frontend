import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import "./imports-ui5";
import { PairSessionComponent } from './pages/pair-session/pair-session.component';
import { HomeComponent } from './pages/home/home.component'
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PairSessionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
