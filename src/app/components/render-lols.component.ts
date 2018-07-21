import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/operator/startWith';

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
  cols: Observable<number>;

  constructor(private store: Store<DataState>,
              private observableMedia: ObservableMedia) { }

  ngOnInit(): void {
    this.lols$ = this.store.select(getLols);
    this.inProgress$ = this.store.select(getInProgress);
    this.loaded$ = this.store.select(getIsLoaded);

    const colMap = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 3],
      ['lg', 4],
      ['xl', 5],
    ]);
    let startCol: number;
    colMap.forEach((cols, mgAlias) => {
      if (this.observableMedia.isActive(mgAlias)) {
        startCol = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return colMap.get(change.mqAlias);
      }).startWith(startCol);
  }

  fetchGif() {
    this.store.dispatch(new FetchLolAction());
  }

}
