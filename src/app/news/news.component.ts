/**
 * Created by Thibault on 06/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {NewsService} from '../shared/services/news.service';
import {News} from '../shared/types/News';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [
    NewsService
  ]
})
export class NewsComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getAll()
      .subscribe(
        (item: News) => this.news.push(item),
        (error: Error) => console.error(error),
        () => {
        }
      );
  }
}
