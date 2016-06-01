import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Message, PagedResource } from './shared';
import { environment } from './environment';

@Injectable()
export class MessagesService {

  latest: Message[] = [
    { id: '1', user: "Pote", uri: '', title: 'Noticia 1', text: '1234', thumbnail: '', tags: null, root: '1', latest: null, date: new Date() },
    { id: '2', user: "Pepe", uri: '', title: 'Noticia 2', text: 'qwer', thumbnail: '', tags: null, root: '2', latest: null, date: new Date() },
    { id: '3', user: "Risi", uri: '', title: 'Noticia 3', text: 'asdf', thumbnail: '', tags: null, root: '3', latest: null, date: new Date() },
    { id: '4', user: "Vivi", uri: '', title: 'Noticia 4', text: 'fhgkjf', thumbnail: '', tags: null, root: '4', latest: null, date: new Date() },
  ];

  constructor(private http: Http) { }

  getMessages(page: number, pageSize: number): Promise<PagedResource<Message>> {
    return this.http.get(environment.api.messages)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getMessage(id: string): Promise<Message> {
    return this.http.get(environment.api.messages +  '/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  save(message: Message): Promise<Message> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.api.messages, JSON.stringify(message), headers)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
