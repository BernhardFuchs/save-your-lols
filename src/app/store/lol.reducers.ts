import { DataState } from './data.state';
import { LolAction, FETCH_LOL, FETCH_LOL_SUCCESS, FETCH_LOL_ERROR } from './lol.action';

const initialState: DataState = {
  loaded: false,
  inProgress: false,
  error: undefined,
  lols: []
};

export function reducers(state: DataState = initialState, action: LolAction): DataState {
  switch (action.type) {
    case FETCH_LOL: {
      console.log('Fetching with action: ', action);
      return {
        ...state,
        inProgress: true,
        loaded: false,
        error: undefined
      };
    }
    case FETCH_LOL_SUCCESS: {
      console.log('Fetch success: ', action);
      return {
        ...state,
        loaded: true,
        inProgress: false,
        lols: action.payload,
        error: undefined
      };
    }
    case FETCH_LOL_ERROR: {
      console.log('Fetch Error: ', action);
      return {
        ...state,
        loaded: true,
        inProgress: false,
        error: action.error,
        lols: undefined
      };
    }
  }
  return state;
}
