import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatTableModule, MatIconModule, MatButtonModule,
  MatTooltipModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
