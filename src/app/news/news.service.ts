/**
 * Created by Thibault on 06/05/2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx'

import {news} from '../mocks/news';
import {News} from '../types/News';

@Injectable()
export class NewsService {
  getAll():Observable<News[]> {
    return Observable.from(news);
  }
}
