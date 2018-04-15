import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { RenderLolsComponent } from './components/render-lols.component';
import { FetchLolService } from './services/fetch-lol.service';
import { FetchLolServiceMock } from './services/fetch-lol.service.mock';
import { AppStoreModule } from './store/app-store.module';
import { GuiModule } from './gui.module';


@NgModule({
  declarations: [
    AppComponent,
    RenderLolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    AppStoreModule,
    GuiModule
  ],
  providers: [
    {provide: FetchLolService, useClass: FetchLolServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
