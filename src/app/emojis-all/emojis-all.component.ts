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
  displayedColumns: string[] = ['name', 'url', 'preview', 'actions'];
  emojisArray: Emoji[];
  preloaderVisible: boolean;


  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmojis();
  }


  // Get list of all emojis
  async getEmojis(): Promise<void> {
    this.preloaderVisible = true;
    await this.emojiService.getList()
      .then(data => {
        this.emojisArray = data;
        this.preloaderVisible = false;
      });
  }


  // Add emoji in list of favorite
  favorite(key: string): void {
    this.emojiService.favorite(key);
  }


  // Add emoji in list of deleted
  delete(emoji: Emoji): void {
    this.emojisArray = this.emojisArray.filter(h => h !== emoji);
    this.emojiService.delete(emoji.name);
  }


  // Check is emoji in the list of favorite
  checkInFavorite(key: string): boolean {
    return this.emojiService.cheackInFavorite(key);
  }


  // Search emoji in specified list of emojis
  async search(findStr: string): Promise<void> {
    this.emojisArray = await this.emojiService.searchEmojis('', findStr);
  }
}
