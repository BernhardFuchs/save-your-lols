import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { DataState, getHeadlines } from '../store';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  headlines$: Observable<string[]>;

  constructor(private store$: Store<DataState>) { }

  ngOnInit() {
    this.headlines$ = this.store$.select(getHeadlines);
  }

}
