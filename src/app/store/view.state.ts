import { createFeatureSelector } from '@ngrx/store';
import { LolView } from '../models';

export const VIEW_STATE_IDENTIFIER = 'ViewState';

export interface ViewState {
  loaded: boolean;
  inProgress: boolean;
  error: any;
  lols: LolView[];
}

export const getAppState = createFeatureSelector<ViewState>(
  VIEW_STATE_IDENTIFIER
);
