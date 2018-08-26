import { Component, OnInit } from '@angular/core';
import { Emoji } from '../emoji';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-emojis-favorite',
  templateUrl: './emojis-favorite.component.html',
  styleUrls: ['./emojis-favorite.component.css']
})
export class EmojisFavoriteComponent implements OnInit {
  title = 'любимые';
  emojisFavorite: Emoji[];


  constructor(private emojiService: EmojiService) { }

  ngOnInit() {
    this.getEmoji();
  }


  // get list emojis
  getEmoji(): void {
    this.emojiService.getEmojis('listFavorite=true')
      .subscribe(emojis => this.emojisFavorite = emojis);
  }


  // add emoji in list deleted
  delete(emoji: Emoji): void {
    emoji.listDeleted = true;
    emoji.listFavorite = false;
    this.emojisFavorite = this.emojisFavorite.filter(h => h !== emoji);
    this.emojiService.updateEmoji(emoji)
      .subscribe();
  }
}
