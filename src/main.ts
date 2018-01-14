/**
 *  bootstrapper for client app
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

/**
 *  NgModuleで作ったモジュールを、各プラットフォームの
 *  bootstrapModuleメソッドで起動するという流れになります。
 */
document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
