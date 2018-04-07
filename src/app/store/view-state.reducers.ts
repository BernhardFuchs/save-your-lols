import { ViewState } from './view.state';
import { LolAction, FETCH_LOL, FETCH_LOL_SUCCESS, FETCH_LOL_ERROR } from './lol.action';

const initialState: ViewState = {
  loaded: false,
  inProgress: false,
  error: undefined,
  lols: []
};

export function reducers(state: ViewState = initialState, action): ViewState {
  switch (action) {
    case FETCH_LOL: {
      return {
        ...state,
        inProgress: true,
        loaded: false,
        error: undefined
      };
    }
    case FETCH_LOL_SUCCESS: {
      return {
        ...state,
        loaded: true,
        inProgress: false,
        lols: action.payload,
        error: undefined
      };
    }
    case FETCH_LOL_ERROR: {
      return {
        ...state,
        loaded: true,
        inProgress: false,
        error: action.payload,
        lols: undefined
      };
    }
  }
  return state;
}
