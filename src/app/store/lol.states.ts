import { createFeatureSelector } from '@ngrx/store';
import { LolData } from '../models';

export const DATA_STATE_IDENTIFIER = 'DataState';
export interface DataState {
  loaded: boolean;
  inProgress: boolean;
  error: any;
  lols: LolData[];
  gifCounter: number;
}
export const getDataState = createFeatureSelector<DataState>(
  DATA_STATE_IDENTIFIER
);

export const VIEW_STATE_IDENTIFIER = 'ViewState';
export interface ViewState {
  displayedLols: LolData[];
}
export const getViewState = createFeatureSelector<ViewState>(
  VIEW_STATE_IDENTIFIER
);
