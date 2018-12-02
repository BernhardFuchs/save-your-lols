import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolData } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class FetchLolService {

  constructor(private httpClient: HttpClient) { }

  fetchLol(): Observable<LolData> {
    console.log('Start fetching');
    return this.httpClient.get<LolData>('http://localhost:3000/random')
      .do(res =>
        console.log('Response', res),
        error => {
          console.log('Error', error);
          console.log('url:', error.url);
        })
      .map( res => this.extractLolData(res));
  }

  private extractLolData(res): LolData {
    return new LolData(res.location, res.headline, res.gifUrl, res.gifData.data);
  }

}
