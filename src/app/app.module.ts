import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RenderLolsComponent } from './render-lols/render-lols.component';
import { FetchLolService } from './fetch-lol.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FetchLolServiceMock } from './fetch-lol.service.mock';


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
    {provide: FetchLolService, useClass: FetchLolServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
