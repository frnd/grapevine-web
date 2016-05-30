import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'grapevine-web-app',
  templateUrl: 'grapevine-web.component.html',
  styleUrls: ['grapevine-web.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class GrapevineWebAppComponent {
  title = 'grapevine-web works!';
}
