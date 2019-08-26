import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaFaInputComponent } from './libs/ta-fa-input/ta-fa-input.component';

@NgModule({
  declarations: [AppComponent, TaFaInputComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
