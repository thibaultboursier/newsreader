/**
 * Created by Thibault on 06/05/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {NewsService} from '../shared/services/news.service';
import {ActivatedRoute} from '@angular/router';
import {News} from '../shared/types/News';

@Component({
  selector: 'news',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
  providers: [
    NewsService
  ]
})
export class NewsDetailComponent implements OnInit {
  item: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location:Location
  ) {
  }

  goBack():void{
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap(({id}) => this.newsService.getById(Number(id)))
      .subscribe((item:News) => this.item = item);
  }
}
