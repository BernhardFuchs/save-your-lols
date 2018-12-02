import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { RenderLolsComponent } from './render-lols/render-lols.component';
import { CounterComponent } from './counter/counter.component';
import { FetchLolService } from './services/fetch-lol.service';
import { AppStoreModule } from './store/app-store.module';
import { GuiModule } from './gui.module';
import { HeadlinesComponent } from './headlines/headlines.component';


@NgModule({
  declarations: [
    AppComponent,
    RenderLolsComponent,
    CounterComponent,
    HeadlinesComponent
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
    {provide: FetchLolService, useClass: FetchLolService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
