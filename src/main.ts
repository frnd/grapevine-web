import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GrapevineWebAppComponent, environment } from './app/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(GrapevineWebAppComponent);

