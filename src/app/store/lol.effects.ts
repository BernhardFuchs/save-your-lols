import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { FETCH_LOL, FetchLolSuccessAction, FetchLolErrorAction } from './lol.action';
import { FetchLolService, FetchLolServiceMock } from '../services';

@Injectable()
export class LolEffects {
  constructor(private actions$: Actions,
              private service: FetchLolServiceMock) {}

  @Effect()
  fetchLols$ = this.actions$.ofType(FETCH_LOL)
    .pipe(
      exhaustMap(() => {
        return this.service.fetchLol()
          .pipe(
            map((lols) => new FetchLolSuccessAction(lols)),
            catchError((error) => {
              return of(new FetchLolErrorAction(error));
            })
          );
      })
    );
}
