import { Component, OnInit , Input} from '@angular/core';
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
  message: Message = new Message();
  tags: String;
  embedly: boolean = false;
  @Input('wizard') wizard: boolean;
  crawled: boolean = false;
  
  constructor(private messagesService: MessagesService) {
    
  }

  ngOnInit() {
  }
  
  getEmbedlyData () {
    
    // TODO get embedly
    this.crawled = true;
    this.embedly = true;
    this.message.title = "Lorem ipsum";
    this.message.text = "lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum";
  }
  
  save (){
    this.messagesService.save(this.message).then(()=> this.message= new Message());
  }

}
