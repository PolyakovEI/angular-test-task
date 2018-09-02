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
  emojisAll: Emoji[];
  emojisArray: Emoji[];
  preloaderVisible: boolean;

  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmojis();

  }


  // get list emojis
  async getEmojis(): Promise<void> {
    this.preloaderVisible = true;
    await this.emojiService.getList()
      .then(data => {
        this.emojisArray = data;
        this.preloaderVisible = false;
      });
  }


  // add emoji in list favorite
  liked(key: string): void {
    this.emojiService.liked(key);
  }


  // add emoji in list deleted
  delete(emoji: Emoji): void {
    this.emojisArray = this.emojisArray.filter(h => h !== emoji);
    this.emojiService.delete(emoji.name);
  }


  checkInLiked(key: string): boolean {
    return this.emojiService.cheackInLiked(key);
  }

  async search(findStr: string): Promise<void> {
    this.emojisArray = await this.emojiService.searchEmojis('', findStr);
  }


  log(ev: Event): void {
    console.log(ev);
  }
}
