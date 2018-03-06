import { Component, OnInit } from '@angular/core';
import { LolData } from '../lolData.model';
import { FetchLolService } from '../fetch-lol.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-render-lols',
  templateUrl: './render-lols.component.html',
  styleUrls: ['./render-lols.component.css']
})
export class RenderLolsComponent implements OnInit {

  constructor(private fetchLolService: FetchLolService) { }

  lolData$: Observable<Object>;
  ngOnInit() {
    this.lolData$ = this.fetchLolService.fetchLol();
  }

}
