import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojisAllComponent } from './emojis-all/emojis-all.component';
import { EmojisFavoriteComponent } from './emojis-favorite/emojis-favorite.component';
import { EmojisDeletedComponent } from './emojis-deleted/emojis-deleted.component';

const routes: Routes = [
  { path: '', redirectTo: '/emojisAll', pathMatch: 'full' },
  { path: 'emojisAll', component: EmojisAllComponent },
  { path: 'emojisFavorite', component: EmojisFavoriteComponent },
  { path: 'emojisDeleted', component: EmojisDeletedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
