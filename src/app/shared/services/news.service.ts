/**
 * Created by Thibault on 06/05/2017.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx'

import {news} from '../mocks/news';
import {News} from '../types/News';

@Injectable()
export class NewsService {

  /**
   * Get all news.
   * @returns {Observable}
   */
  getAll(){
    return Observable.from(news);
  }

  /**
   * Get news by id.
   * @param id
   * @returns {Observable}
   */
  getById(id:number):Observable<News>{
    return this.getAll()
      .filter(item => item.id === id);
  }
}
