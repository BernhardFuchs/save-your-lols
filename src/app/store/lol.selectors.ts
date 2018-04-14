import { createSelector, createFeatureSelector } from '@ngrx/store';

import { DataState, DATA_STATE_IDENTIFIER } from './data.state';

const getDataState = createFeatureSelector<DataState>(DATA_STATE_IDENTIFIER);
const fetchLolsSuccess = (dataState: DataState) => dataState.lols;
const fetchLolsInProgress = (dataState: DataState) => dataState.inProgress;
const fetchLolsLoaded = (dataState: DataState) => dataState.loaded;
const fetchLolsError = (dataState: DataState) => dataState.error;

export const getLols = createSelector(
  getDataState,
  (dataState: DataState) => dataState.lols
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
