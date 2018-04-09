import { createFeatureSelector } from '@ngrx/store';
import { LolData } from '../models';

export const DATA_STATE_IDENTIFIER = 'DataState';

export interface DataState {
  loaded: boolean;
  inProgress: boolean;
  error: any;
  lols: LolData[];
}

export const getAppState = createFeatureSelector<DataState>(
  DATA_STATE_IDENTIFIER
);
