import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { LolData } from '../models';

@Injectable()
export class FetchLolServiceMock {

  constructor(private httpClient: HttpClient) { }

  fetchLol(): Observable<LolData[]> {
    console.log('Start fetching');
    return this.httpClient.get<LolData[]>('assets/serverResponse.json')
      .do(res => console.log('Response', res),
        error => {
          console.log('Error', error);
          console.log('url:', error.url);
        })
      .map((res: Array<any>) => this.mapLols(res));

  }

  private mapLols(lols: Array<any>): LolData[] {
    const mappedLols: LolData[] = [];
    for (const lolData of lols) {
      mappedLols.push(this.extractLolData(lolData));
    }
    console.log(`Mapped Lols`, mappedLols);
    console.log('imgdata:', mappedLols[0].imgData);
    return mappedLols;
  }

  private extractLolData(res): LolData {
    return new LolData(res.location, res.headline, res.gifUrl, res.gifData.data);
  }

}
