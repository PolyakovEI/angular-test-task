import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../emoji.service';
import { Emoji } from '../emoji';

@Component({
  selector: 'app-emojis-deleted',
  templateUrl: './emojis-deleted.component.html',
  styleUrls: ['./emojis-deleted.component.css']
})
export class EmojisDeletedComponent implements OnInit {
  title = 'удаленные';
  displayedColumns: string[] = ['name', 'url', 'preview', 'actions'];
  emojisArray: Emoji[];

  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmojis();
  }


  // get list deleted emojis
  async getEmojis(): Promise<void> {
    this.emojisArray = await this.emojiService.getList('deleted');
  }


  // restore deleted emojis
  restore(emoji: Emoji): void {
    this.emojisArray = this.emojisArray.filter(h => h !== emoji);
    this.emojiService.delete(emoji.name);
  }


  async search(findStr: string): Promise<void> {
    this.emojisArray = await this.emojiService.searchEmojis('deleted', findStr);
  }
}
