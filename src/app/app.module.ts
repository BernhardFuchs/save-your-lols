import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatToolbarModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RenderLolsComponent } from './render-lols/render-lols.component';
import { FetchLolService } from './fetch-lol.service';
import { FetchLolServiceMock } from './fetch-lol.service.mock';
import { AppStoreModule } from './store/app-store.module';


@NgModule({
  declarations: [
    AppComponent,
    RenderLolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    AppStoreModule
  ],
  providers: [
    {provide: FetchLolService, useClass: FetchLolServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
