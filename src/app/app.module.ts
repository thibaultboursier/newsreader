import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {NewsComponent} from './news/news.component';
import {MdListModule, MdCardModule, MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    MdListModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [
    AppComponent,
    NewsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
