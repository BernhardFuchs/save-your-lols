import { Component, OnInit } from '@angular/core';
import { LolData } from '../lolData.model';
import { FetchLolService } from '../fetch-lol.service';
import { Observable } from 'rxjs/Observable';
import * as isGif from 'is-gif';
import { gen_anim } from './gif-service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.css']
})
export class RenderLolsComponent implements OnInit {

  gifCreated = false;

  constructor(
    private fetchLolService: FetchLolService,
    // private fileSaver: FileSaver
  ) { }

  lolData$: Observable<LolData>;
  ngOnInit() {
    this.lolData$ = this.fetchLolService.fetchLol();
  }

  parseGif(buffer) {
    console.log(buffer);
    // console.log('Is Gif: ', isGif(buffer));
    FileSaver.saveAs(new Blob(gen_anim(buffer)), './_tmp.gif');
  }

  renderGif() {
    this.gifCreated = true;
  }

}
