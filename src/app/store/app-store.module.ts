import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { VIEW_STATE_IDENTIFIER } from './view.state';
import { reducers } from './view-state.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(VIEW_STATE_IDENTIFIER, reducers)
  ]
})

export class AppStoreModule {}
