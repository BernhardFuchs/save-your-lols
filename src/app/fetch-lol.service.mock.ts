import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolData } from './lolData.model';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class FetchLolServiceMock {

  constructor(private httpClient: HttpClient) { }

  fetchLol(): Observable<LolData> {
    console.log('Start fetching');
    return this.httpClient.get<LolData>('assets/serverResponse.json')
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
