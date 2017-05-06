import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NewsComponent} from './news/news.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {NewsCreateComponent} from './news-create/news-create.component';
import {Router} from './app.router';
import {MdListModule, MdCardModule, MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    Router
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    NewsDetailComponent,
    NewsCreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
