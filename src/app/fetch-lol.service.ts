import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolData } from './lolData.model';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class FetchLolService {

  constructor(private httpClient: HttpClient) { }

  renderGif() {
    return this.httpClient.get('assets/example.gif');
  }

  fetchLol(): Observable<LolData> {
    console.log('Start fetching');
    return this.httpClient.get<LolData>('http://tclhost.com/1bTelKB.gif')
      .do(res =>
        console.log('Response', res),
        error => {
          console.log('Error', error);
          console.log('url:', error.url);
          this.extractLolData(error);
        })
      .map( res => this.extractLolData(res));

  }

  private extractLolData(res): LolData {
    console.log('extracting Data');
    const headline = res.url;
    const imgUrl = res.url;
    /*const headlineTag = body.match(/<h3>(.*?)<\/hr>/);
    const headline = headlineTag[2];
    const imageTag = body.match(/<p class="e"><img src="(.*?)"/);
    const imgUrl = imageTag[2];*/
    const data = new LolData(headline, imgUrl);
    console.log('Data', data);
    return data;
  }
}
