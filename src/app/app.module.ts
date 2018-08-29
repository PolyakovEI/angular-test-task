import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmojisAllComponent } from './emojis-all/emojis-all.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmojisFavoriteComponent } from './emojis-favorite/emojis-favorite.component';
import { EmojisDeletedComponent } from './emojis-deleted/emojis-deleted.component';

@NgModule({
  declarations: [
    AppComponent,
    EmojisAllComponent,
    EmojisFavoriteComponent,
    EmojisDeletedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
