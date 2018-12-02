import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { FETCH_LOL, FetchLolSuccessAction, FetchLolErrorAction } from './lol.action';
import { FetchLolService } from '../services';

@Injectable()
export class LolEffects {
  constructor(private actions$: Actions,
              private service: FetchLolService) {}

  @Effect()
  fetchLols$ = this.actions$.ofType(FETCH_LOL)
    .do(() => console.log('Effect started'))
    .pipe(
      exhaustMap(() => {
        return this.service.fetchLol()
          .do((lol) => console.log(`Lols:`, lol))
          .pipe(
            map((lol) => new FetchLolSuccessAction(lol)),
            catchError((error) => {
              return of(new FetchLolErrorAction(error));
            })
          );
      })
    );
}
