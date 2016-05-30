import { MessagePreview } from './messagePreview.model';

/**
 * Message
 */
export class Message {
    id: String;
    uri: String;
    user: String;
    title: String;
    text: String;
    thumbnail:String;
    tags: String[];
    root: String;
    latest: MessagePreview;
    date: Date;
    
    constructor(parameters) {
        
    }
}