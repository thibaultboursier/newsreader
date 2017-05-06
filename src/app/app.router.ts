/**
 * Created by Thibault on 06/05/2017.
 */
import {RouterModule, Route} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {NewsCreateComponent} from './news-create/news-create.component';

const routes: Route[] = [
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/create',
    component: NewsCreateComponent
  },
  {
    path: 'news/:id',
    component: NewsDetailComponent
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  }
];

export const Router = RouterModule.forRoot(routes);
