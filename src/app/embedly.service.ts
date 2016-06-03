import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from './environment';

@Injectable()
export class EmbedlyService {

  constructor(private http: Http) { }

  embed(inputUrl, maxwidth, scheme) {
    var escapedUrl = encodeURIComponent(inputUrl);
    var embedlyRequest = environment.embedly.protocol + '://api.embed.ly/1/oembed?key=' + environment.embedly.key + '&url=' + escapedUrl;

    if (typeof maxwidth !== 'undefined') {
      embedlyRequest = embedlyRequest + '&maxwidth=' + maxwidth;
    }

    if (typeof scheme !== 'undefined') {
      embedlyRequest = embedlyRequest + '&scheme=' + scheme;
    }

    return this.http.get(embedlyRequest).toPromise().then(response => response.json())
      .catch(this.handleError);
  };
  extract(inputUrl) {
    var escapedUrl = encodeURIComponent(inputUrl);
    var embedlyRequest = environment.embedly.protocol + '://api.embed.ly/1/extract?key=' + environment.embedly.key + '&url=' + escapedUrl;
    return this.http.get(embedlyRequest).toPromise().then(response => response.json())
      .catch(this.handleError);
  };
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
