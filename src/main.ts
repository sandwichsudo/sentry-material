import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TestNgMat2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestNgMat2AppComponent);

