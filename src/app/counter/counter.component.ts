import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataState, getGifCounter } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<DataState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getGifCounter);
  }

}
