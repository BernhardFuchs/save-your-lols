import { DataState, ViewState } from './lol.states';
import { LolAction, FETCH_LOL, FETCH_LOL_SUCCESS, FETCH_LOL_ERROR } from './lol.action';
import { LolData } from '../models';

const initialDataState: DataState = {
  loaded: false,
  inProgress: false,
  error: undefined,
  lols: [],
  gifCounter: 0
};

export function dataReducers(state: DataState = initialDataState, action: LolAction): DataState {
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
        lols: [...state.lols, ...[action.payload]],
        error: undefined,
        gifCounter: state.gifCounter += 1
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
    default:
      return state;
  }
}

const initialViewState: ViewState = {
  displayedLols: []
};
export function viewReducers(state: ViewState = initialViewState, action: LolAction) {
  switch (action.type) {
    case FETCH_LOL_SUCCESS: {
      console.log('Updating ViewState');
      return {
        ...state,
        displayedLols: addLol(state.displayedLols, action.payload)
      };
    }
    default:
      return state;
  }
}

function addLol(currentLols: LolData[], newLol: LolData): LolData[] {
  if (currentLols.length >= 2) {
    currentLols.shift();
    currentLols.push(newLol);
  } else {
    currentLols.push(newLol);
  }
  return currentLols;
}
