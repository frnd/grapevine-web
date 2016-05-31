import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { Message } from './shared'
import { MessageEditorComponent } from './message-editor/message-editor.component';

@Component({
  moduleId: module.id,
  selector: 'grapevine-web-app',
  templateUrl: 'grapevine-web.component.html',
  styleUrls: ['grapevine-web.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon,
    MD_INPUT_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    MessageEditorComponent
  ],
  providers: [MdIconRegistry]
})
export class GrapevineWebAppComponent {
  formShowing: boolean = false;
  latest: Message[] = [
    {id: '1', user: "Pote", uri: '', title: 'Noticia 1', text: '1234', thumbnail: '', tags: null , root: '1' , latest: null , date: new Date() },
    {id: '2', user: "Pepe", uri: '', title: 'Noticia 2', text: 'qwer', thumbnail: '', tags: null , root: '2' , latest: null , date: new Date() },
    {id: '3', user: "Risi", uri: '', title: 'Noticia 3', text: 'asdf', thumbnail: '', tags: null , root: '3' , latest: null , date: new Date() },
    {id: '4', user: "Vivi", uri: '', title: 'Noticia 4', text: 'fhgkjf', thumbnail: '', tags: null , root: '4' , latest: null , date: new Date() },
  ];
}
