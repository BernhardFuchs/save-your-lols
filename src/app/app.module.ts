import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RenderLolsComponent } from './render-lols/render-lols.component';
import { FetchLolService } from './fetch-lol.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RenderLolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FetchLolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
