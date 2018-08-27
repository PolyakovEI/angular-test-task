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
  emojisDeleted: Emoji[];
  constructor(private emojiService: EmojiService) { }


  ngOnInit() {
    this.getEmojis();
  }


  // get list deleted emojis
  getEmojis(): void {
    this.emojiService.getEmojis('listDeleted=true')
      .subscribe(emojis => this.emojisDeleted = emojis);
  }


  // restore deleted emojis
  restore(emoji: Emoji): void {
    emoji.listDeleted = false;
    this.emojisDeleted = this.emojisDeleted.filter(h => h !== emoji);
    this.emojiService.updateEmoji(emoji)
      .subscribe();
  }
}
