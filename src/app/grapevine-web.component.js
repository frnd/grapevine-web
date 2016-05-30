"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var icon_1 = require('@angular2-material/icon');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var toolbar_1 = require('@angular2-material/toolbar');
var grid_list_1 = require('@angular2-material/grid-list');
var GrapevineWebAppComponent = (function () {
    function GrapevineWebAppComponent() {
        this.latest = [
            { id: '1', user: "Pote", uri: '', title: 'Noticia 1', text: '1234', thumbnail: '', tags: null, root: '1', latest: null, date: new Date() },
            { id: '2', user: "Pepe", uri: '', title: 'Noticia 2', text: 'qwer', thumbnail: '', tags: null, root: '2', latest: null, date: new Date() },
            { id: '3', user: "Risi", uri: '', title: 'Noticia 3', text: 'asdf', thumbnail: '', tags: null, root: '3', latest: null, date: new Date() },
            { id: '4', user: "Vivi", uri: '', title: 'Noticia 4', text: 'fhgkjf', thumbnail: '', tags: null, root: '4', latest: null, date: new Date() },
        ];
    }
    GrapevineWebAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grapevine-web-app',
            templateUrl: 'grapevine-web.component.html',
            styleUrls: ['grapevine-web.component.css'],
            directives: [
                card_1.MD_CARD_DIRECTIVES,
                button_1.MD_BUTTON_DIRECTIVES,
                icon_1.MdIcon,
                input_1.MD_INPUT_DIRECTIVES,
                radio_1.MD_RADIO_DIRECTIVES,
                toolbar_1.MD_TOOLBAR_DIRECTIVES,
                grid_list_1.MD_GRID_LIST_DIRECTIVES
            ],
            providers: [icon_1.MdIconRegistry]
        })
    ], GrapevineWebAppComponent);
    return GrapevineWebAppComponent;
}());
exports.GrapevineWebAppComponent = GrapevineWebAppComponent;
//# sourceMappingURL=grapevine-web.component.js.map