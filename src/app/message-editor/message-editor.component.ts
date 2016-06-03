import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { Message } from '../shared';
import { MessagesService } from '../messages.service';
import { EmbedlyService } from '../embedly.service';

enum CrawlState {
    NONE = 1,
    CRAWLING,
    COMPLETE
}

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
  providers: [MdIconRegistry, MessagesService, EmbedlyService],

})
export class MessageEditorComponent implements OnInit {
  @Input('wizard') wizard: boolean;
  @Output() onMessageCreated = new EventEmitter<boolean>();
  message: Message = new Message();
  tags: String = '';
  embedly: boolean = false;
  crawled: CrawlState = CrawlState.NONE;
  crawledEnum = CrawlState;

  constructor(private messagesService: MessagesService, private embedlyService: EmbedlyService) {

  }

  ngOnInit() {
  }

  getEmbedlyData() {
    this.crawled = CrawlState.CRAWLING;
    this.embedlyService.extract(this.message.uri)
      .then((data) => {
        this.crawled = CrawlState.COMPLETE;
        this.embedly = true;
        this.message.title = data.title;
        this.message.text = data.description;
        this.message.tags = data.keywords;
        this.tags = this.message.tags.join(' ,');
        if(data.images && data.images.length){
          this.message.thumbnail = data.images[0].url;
        }
      })
      .catch(() => {
        this.crawled = CrawlState.COMPLETE;
        this.embedly = false;
      });

  }

  updateTags(tags: String) {
    this.message.tags = tags.split(',').map((tag) => tag.trim());
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
