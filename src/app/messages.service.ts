import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Message, PagedResource } from './shared';
import { environment } from './environment';

@Injectable()
export class MessagesService {

  constructor(private http: Http) { }

  getMessages(page: number, pageSize: number): Promise<PagedResource<Message>> {
    return this.http.get(environment.api.messages)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getMessage(id: string): Promise<Message> {
    return this.http.get(environment.api.messages + '/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  save(message: Message): Promise<Message> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.api.messages, JSON.stringify(message), {
      headers: headers
    })
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
