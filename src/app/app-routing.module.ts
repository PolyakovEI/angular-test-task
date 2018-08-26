import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojisAllComponent } from './emojis-all/emojis-all.component';
import { EmojisFavoriteComponent } from './emojis-favorite/emojis-favorite.component';

const routes: Routes = [
  { path: '', redirectTo: '/emojis', pathMatch: 'full' },
  { path: 'emojisAll', component: EmojisAllComponent },
  { path: 'emojisFavorite', component: EmojisFavoriteComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
