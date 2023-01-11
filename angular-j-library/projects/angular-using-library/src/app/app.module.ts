import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JAngularStencilLibraryModule } from 'j-angular-stencil-library';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JAngularStencilLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
