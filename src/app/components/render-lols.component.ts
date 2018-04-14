import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FetchLolAction, DataState, getLols, getInProgress, getIsLoaded } from '../store';
import { LolData } from '../models';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.scss']
})
export class RenderLolsComponent implements OnInit {

  lols$: Observable<LolData[]>;
  inProgress$: Observable<boolean>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<DataState>) { }

  ngOnInit(): void {
    this.lols$ = this.store.select(getLols);
    this.inProgress$ = this.store.select(getInProgress);
    this.loaded$ = this.store.select(getIsLoaded);
  }

  fetchGif() {
    this.store.dispatch(new FetchLolAction());
  }

}
