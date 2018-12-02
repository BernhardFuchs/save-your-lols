import { createSelector, createFeatureSelector } from '@ngrx/store';

import { DataState, DATA_STATE_IDENTIFIER, getViewState, ViewState } from './lol.states';
import { LolData } from '../models';

const getDataState = createFeatureSelector<DataState>(DATA_STATE_IDENTIFIER);

export const getDisplayedLols = createSelector(
  getViewState,
  (viewState: ViewState) => viewState.displayedLols
);

export const getHeadlines = createSelector(
  getDataState,
  (dataState: DataState) => dataState.lols.map((lol: LolData) => lol.headline)
);

export const getInProgress = createSelector(
  getDataState,
  (dataState: DataState) => dataState.inProgress
);

export const getIsLoaded = createSelector(
  getDataState,
  (dataState: DataState) => dataState.loaded
);

export const getError = createSelector(
  getDataState,
  (dataState: DataState) => dataState.error
);

export const getGifCounter = createSelector(
  getDataState,
  (dataState: DataState) => dataState.gifCounter
);
