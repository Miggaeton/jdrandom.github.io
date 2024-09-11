import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersusComponent } from './versus/versus.component';
import { RondaComponent } from './ronda/ronda.component';

@NgModule({
  declarations: [
    AppComponent,
    VersusComponent, 
    RondaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
