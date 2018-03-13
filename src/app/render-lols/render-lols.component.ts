import { Component, OnInit } from '@angular/core';
import { LolData } from '../lolData.model';
import { FetchLolService } from '../fetch-lol.service';
import { Observable } from 'rxjs/Observable';
import { gen_anim } from './gif-service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.css']
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

  saveGif(buffer) {
    console.log(buffer);
    FileSaver.saveAs(new Blob(gen_anim(buffer)), './_tmp.gif');
  }

}
