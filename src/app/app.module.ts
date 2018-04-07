import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RenderLolsComponent } from './render-lols/render-lols.component';
import { FetchLolService } from './fetch-lol.service';
import { FetchLolServiceMock } from './fetch-lol.service.mock';


@NgModule({
  declarations: [
    AppComponent,
    RenderLolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [
    {provide: FetchLolService, useClass: FetchLolServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
