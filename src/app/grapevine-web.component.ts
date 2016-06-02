import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { Message } from './shared'
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessagesService } from './messages.service';

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
  providers: [MdIconRegistry, MessagesService]
})
@Routes([
  { path: '/messages/:id', component: MessageDetailComponent }
])
export class GrapevineWebAppComponent implements OnInit {

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.getMessages(0, 0).then(data => this.latest = data.content);
  }

  formShowing: boolean = false;
  latest: Message[];
  
  onMessageCreated(){
    this.formShowing = false;
    this.ngOnInit();
  }
}
