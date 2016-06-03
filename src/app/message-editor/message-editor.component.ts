import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { Message } from '../shared';
import { MessagesService } from '../messages.service';

@Component({
  moduleId: module.id,
  selector: 'gv-message-editor',
  templateUrl: 'message-editor.component.html',
  styleUrls: ['message-editor.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdButton,
    MdInput,
    MdIcon
  ],
  providers: [MdIconRegistry, MessagesService],

})
export class MessageEditorComponent implements OnInit {
  @Input('wizard') wizard: boolean;
  @Output() onMessageCreated = new EventEmitter<boolean>();
  message: Message = new Message();
  tags: String = '';
  embedly: boolean = false;
  crawled: boolean = false;

  constructor(private messagesService: MessagesService) {

  }

  ngOnInit() {
  }

  getEmbedlyData() {

    // TODO get embedly
    this.crawled = true;
    this.embedly = true;
    this.message.title = "Lorem ipsum";
    this.message.text = "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum";
  }
  
  updateTags(tags: String){
    this.message.tags = tags.split(',').map((tag)=>tag.trim());
  }

  save() {
    this.messagesService.save(this.message)
      .then(() => {
        this.onMessageCreated.emit(true);
        this.message = new Message();
        this.tags = '';
      });
  }
}
