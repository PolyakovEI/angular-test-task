import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Emoji } from './emoji';
import { resolve } from 'url';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  private emojisUrl = 'https://api.github.com/emojis';

  public emojis: Object;

  constructor(private http: HttpClient) { }


  getListEmojis() {
    return this.http.get(this.emojisUrl, httpOptions)
      .toPromise()
      .then(data => {
        this.emojis = data;
        console.log(this.emojis);
      });
  }


  async getList(list: string = ''): Promise<Emoji[]> {
    const result: Emoji[] = [];
    // console.log(result);
    if (!this.emojis) {
      await this.getListEmojis();
    }
      if (list) {
        const arrayKeys = Object.values<string>(localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : {});
        if (arrayKeys) {
          for (const key of arrayKeys) {
            result.push(new Emoji(key, this.emojis[key]));
          }
        }
      } else {
        const arrayKeysDeleted = Object.values<string>(localStorage.getItem('deleted') ? JSON.parse(localStorage.getItem('deleted')) : {});
        const arrayKeysAll = Object.keys(this.emojis);

        for (const key of arrayKeysAll) {
          if ((!arrayKeysDeleted) || (arrayKeysDeleted.indexOf(key) < 0)) {
            result.push(new Emoji(key, this.emojis[key]));
          }
        }

      }
      console.log(result);
      return result;
  }


  liked(key: string): void {
    let arrayKeysLiked = Object.values<string>(localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : {});
    if ((arrayKeysLiked) && (arrayKeysLiked.indexOf(key) >= 0)) {
      arrayKeysLiked = arrayKeysLiked.filter(h => h !== key);
    } else {
      arrayKeysLiked.push(key);
    }
    localStorage.setItem('liked', JSON.stringify(arrayKeysLiked));
  }


  delete(key: string): void {
    // проверяем есть ли в списке любимые, то убираем из списка
    let arrayKeysLiked = Object.values<string>(localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : {});
    if ((arrayKeysLiked) && (arrayKeysLiked.indexOf(key) >= 0)) {
      arrayKeysLiked = arrayKeysLiked.filter(h => h !== key);
    }
    localStorage.setItem('liked', JSON.stringify(arrayKeysLiked));
    // Проверяем есть ли в списке удаленных, то убираем из списка, иначе добавляем
    let arrayKeysDeleted = Object.values<string>(localStorage.getItem('deleted') ? JSON.parse(localStorage.getItem('deleted')) : {});
    if ((arrayKeysDeleted) && (arrayKeysDeleted.indexOf(key) >= 0)) {
      arrayKeysDeleted = arrayKeysDeleted.filter(h => h !== key);
    } else {
      arrayKeysDeleted.push(key);
    }
    localStorage.setItem('deleted', JSON.stringify(arrayKeysDeleted));
  }


  cheackInLiked(key: string): boolean {
    const arrayKeysLiked = Object.values<string>(localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : {});
    if ((arrayKeysLiked) && (arrayKeysLiked.indexOf(key) >= 0)) {
      return true;
    }
    return false;
  }

}
