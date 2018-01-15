import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

// ngrx
// https://github.com/ngrx/store-devtools
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//FormsModule,
// needs @ngrx/store: 4.1.1  

import { StoreModule } from '@ngrx/store';
import { clock } from './message/message.reducer';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    StoreModule.forRoot({clock})
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
