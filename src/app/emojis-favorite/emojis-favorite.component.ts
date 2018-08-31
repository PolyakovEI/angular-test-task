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
  displayedColumns: string[] = ['name', 'url', 'preview', 'actions'];
  emojisArray: Emoji[];

  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmoji();
  }


  // get list emojis
  async getEmoji(): Promise<void> {
    this.emojisArray = await this.emojiService.getList('liked');
  }


  // add emoji in list deleted
  delete(emoji: Emoji): void {
    this.emojisArray = this.emojisArray.filter(h => h !== emoji);
    this.emojiService.liked(emoji.name);
  }


  async search(findStr: string): Promise<void> {
    this.emojisArray = await this.emojiService.searchEmojis('liked', findStr);
  }
}
