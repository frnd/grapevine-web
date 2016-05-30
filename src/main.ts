import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GrapevineWebAppComponent, environment } from './app/index';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(GrapevineWebAppComponent,[
    HTTP_PROVIDERS
]);

