import { Action } from '@ngrx/store';
import { LolData } from '../models';

export const FETCH_LOL = '[View] Fetch lols';
export const FETCH_LOL_SUCCESS = '[View] Fetch lols success';
export const FETCH_LOL_ERROR = '[View] Fetch lols error';

export class FetchLolAction implements Action {
  readonly type = FETCH_LOL;
  constructor() {}
}

export class FetchLolSuccessAction implements Action {
  readonly type = FETCH_LOL_SUCCESS;
  constructor(public payload: LolData[]) {}
}

export class FetchLolErrorAction implements Action {
  readonly type = FETCH_LOL_ERROR;
  constructor(public error: any) {}
}

export type LolAction = FetchLolAction | FetchLolSuccessAction | FetchLolErrorAction;
