import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DATA_STATE_IDENTIFIER, VIEW_STATE_IDENTIFIER } from './lol.states';
import { dataReducers, viewReducers } from './lol.reducers';
import { LolEffects as effects } from './lol.effects';
import { FetchLolServiceMock } from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature(DATA_STATE_IDENTIFIER, dataReducers),
    StoreModule.forFeature(VIEW_STATE_IDENTIFIER, viewReducers),
    EffectsModule.forFeature([effects])
  ],
  providers: [
    FetchLolServiceMock
  ]
})

export class AppStoreModule {}
