import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Emoji } from './emoji';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  private emojisUrl = 'api/emojis';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET emojis from the server */
  getEmojis(params?: string): Observable<Emoji[]> {
    return this.http.get<Emoji[]>((params.trim().length) ? this.emojisUrl + '?' + params : this.emojisUrl)
      .pipe(
        tap(emojis => this.log('fetched emojis')),
        catchError(this.handleError('getEmojis', []))
      );
  }

  /** PUT: update the emoji on the server */
  updateEmoji(emoji: Emoji): Observable<any> {
    return this.http.put(this.emojisUrl, emoji, httpOptions)
      .pipe(
        tap(_ => this.log(`updated emoji name=${emoji.name}`)),
        catchError(this.handleError<any>('updateEmoji'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`EmojiService: ${message}`);
  }
}
