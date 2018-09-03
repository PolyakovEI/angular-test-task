import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Emoji } from './emoji';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  private emojisUrl = 'https://api.github.com/emojis';
  public emojis: Object;


  constructor(private http: HttpClient) { }


  /**
   * Method for load list of emojis from remoute source
   */
  private getListEmojis() {
    return this.http.get(this.emojisUrl, httpOptions)
      .toPromise()
      .then(data => this.emojis = data
    );
  }


  /**
   * Method for get list of emojis certain component
   * @param list list emojis (all | favorite | deleted)
   */
  async getList(list: string = ''): Promise<Emoji[]> {
    const result: Emoji[] = [];
    // if list emojis didn`t load, then load
    if (!this.emojis) {
      await this.getListEmojis();
    }
    // create the specified list, differently all without deleted
    if (list) {
      const listEmojis = localStorage.getItem(list) ? JSON.parse(localStorage.getItem(list)) : {};
      const arrayKeys = Object.values<string>(listEmojis);
      // if list not empty, then create the specified list
      if (arrayKeys) {
        for (const key of arrayKeys) {
          result.push(new Emoji(key, this.emojis[key]));
        }
      }
    } else {
      const listDeleted = localStorage.getItem('deleted') ? JSON.parse(localStorage.getItem('deleted')) : {};
      const arrayKeysDeleted = Object.values<string>(listDeleted);
      const arrayKeysAll = Object.keys(this.emojis);
      // create list of all emojis without deleted
      for (const key of arrayKeysAll) {
        if ((!arrayKeysDeleted) || (arrayKeysDeleted.indexOf(key) < 0)) {
          result.push(new Emoji(key, this.emojis[key]));
        }
      }
    }
    return result;
  }


  /**
   * Select emoji as favorite and back
   * @param key name emoji
   */
  favorite(key: string): void {
    const listfFavorite = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : {};
    let arrayKeysFavorite = Object.values<string>(listfFavorite);
    // include or remove selected emoji from list of favorite
    if ((arrayKeysFavorite) && (arrayKeysFavorite.indexOf(key) >= 0)) {
      arrayKeysFavorite = arrayKeysFavorite.filter(h => h !== key);
    } else {
      arrayKeysFavorite.push(key);
    }
    // save list of favorite emojis
    localStorage.setItem('favorite', JSON.stringify(arrayKeysFavorite));
  }



  /**
   * Select emoji as deleted and back
   * @param key name emoji
   */
  delete(key: string): void {
    // remove emoji from list of favorite
    const listFavorite = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : {};
    let arrayKeysLiked = Object.values<string>(listFavorite);
    if ((arrayKeysLiked) && (arrayKeysLiked.indexOf(key) >= 0)) {
      arrayKeysLiked = arrayKeysLiked.filter(h => h !== key);
    }
    localStorage.setItem('favorite', JSON.stringify(arrayKeysLiked));

    // include or remove selected emoji from list of deleted
    const listDeleted = localStorage.getItem('deleted') ? JSON.parse(localStorage.getItem('deleted')) : {};
    let arrayKeysDeleted = Object.values<string>(listDeleted);
    if ((arrayKeysDeleted) && (arrayKeysDeleted.indexOf(key) >= 0)) {
      arrayKeysDeleted = arrayKeysDeleted.filter(h => h !== key);
    } else {
      arrayKeysDeleted.push(key);
    }
    localStorage.setItem('deleted', JSON.stringify(arrayKeysDeleted));
  }


  /**
   * Сheck is emoji in the list of favorite
   * @param key name emoji
   */
  cheackInFavorite(key: string): boolean {
    const listFavorite = localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : {};
    const arrayKeysLiked = Object.values<string>(listFavorite);
    if ((arrayKeysLiked) && (arrayKeysLiked.indexOf(key) >= 0)) {
      return true;
    }
    return false;
  }


  /**
   * Search emoji in specified list of emojis
   * @param list list off emojis
   * @param findStr required substring in a name
   */
  async searchEmojis(list: string, findStr: string): Promise<Emoji[]> {
    let emojisArray: Emoji[] = await this.getList(list);
    emojisArray = emojisArray.filter(h => h.name.indexOf(findStr.trim()) + 1);
    return emojisArray;
  }

}
