import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ViewState, FetchLolAction } from '../store';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.scss']
})
export class RenderLolsComponent implements OnInit {

  constructor(private store: Store<ViewState>) { }

  ngOnInit() { }

  fetchGif() {
    this.store.dispatch(new FetchLolAction());
  }

}
