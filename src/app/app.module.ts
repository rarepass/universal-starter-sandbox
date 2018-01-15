import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterEditComponent } from './characters/character-edit/character-edit.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterItemComponent } from './characters/character-list/character-item/character-item.component';
import { CharacterService } from './characters/character.service';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

import { TabsModule } from './tabs/tabs.module';
import { TodoModule } from './todo/todo.module';
import { MessageModule } from './message/message.module';

// ngrx
// https://github.com/ngrx/store-devtools
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//FormsModule,
// needs @ngrx/store: 4.1.1  

import { StoreModule } from '@ngrx/store';
import { clock, people } from './message/message.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterDetailComponent,
    CharacterEditComponent,
    CharacterListComponent,
    CharacterItemComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TabsModule,
    TodoModule,
    MessageModule,
    StoreModule.forRoot({clock, people})
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
