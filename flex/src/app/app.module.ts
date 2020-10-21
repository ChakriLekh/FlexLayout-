import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexComponent } from './flex/flex.component';
import { FlexLayoutModule } from '@angular/flex-layout';
 

@NgModule({
  declarations: [
    AppComponent,
    FlexComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
    
    //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
