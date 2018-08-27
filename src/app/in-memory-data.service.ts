import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // tslint:disable-next-line:prefer-const
    let emojis = [
      // tslint:disable-next-line:max-line-length
      { id: 1, name: '+1', url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v8', listAll: true
      , listFavorite: false, listDeleted: false },
      { id: 2, name: '-1', url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v8', listAll: true
      , listFavorite: false, listDeleted: false  },
      { id: 3, name: '100', url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v8', listAll: true
      , listFavorite: false, listDeleted: false },
      { id: 4, name: '1234', url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v8', listAll: true
      , listFavorite: false, listDeleted: false },
      { id: 5, name: '1st_place_medal', url: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v8'
      , listAll: true, listFavorite: false, listDeleted: false }
    ];
    return { emojis };
  }
}
