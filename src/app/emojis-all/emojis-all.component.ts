import { Component, OnInit } from '@angular/core';
import { Emoji } from '../emoji';
import { EmojiService } from '../emoji.service';

@Component({
  selector: 'app-emojis-all',
  templateUrl: './emojis-all.component.html',
  styleUrls: ['./emojis-all.component.css']
})
export class EmojisAllComponent implements OnInit {
  title = 'все';

  emojisAll: Emoji[];
  emojisArray: Emoji[];

  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmojis();
  }


  // get list emojis
  getEmojis(): void {
    this.emojiService.getEmojis('listDeleted=false')
      .subscribe(emojis => this.emojisAll = emojis);
  }


  // add emoji in list favorite
  favorite(emoji: Emoji): void {
    emoji.listFavorite = !emoji.listFavorite;
    console.log(`${emoji.name} favorite = ${emoji.listFavorite}`);
    this.emojiService.updateEmoji(emoji)
      .subscribe();
  }


  // add emoji in list deleted
  delete(emoji: Emoji): void {
    emoji.listDeleted = true;
    emoji.listFavorite = false;
    this.emojisAll = this.emojisAll.filter(h => h !== emoji);
    this.emojiService.updateEmoji(emoji)
      .subscribe();
  }
}
