import { Component, OnInit } from '@angular/core';
import { LolData } from './lolData.model';
import { FetchLolService } from '../fetch-lol.service';
import { Observable } from 'rxjs/Observable';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.scss']
})
export class RenderLolsComponent implements OnInit {

  lolData$: Observable<LolData>;

  constructor(
    private fetchLolService: FetchLolService
  ) { }

  ngOnInit() { }

  fetchGif() {
    this.lolData$ = this.fetchLolService.fetchLol();
  }

}
