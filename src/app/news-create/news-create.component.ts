/**
 * Created by Thibault on 06/05/2017.
 */
import {Component} from '@angular/core';
import {News} from '../shared/types/News';

@Component({
  selector: 'news',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent {
  item: News = new News();
  isFormEnabled: boolean = true;

  /**
   * On submit hook
   * @param form
   */
  onSubmit(form: any) {
    this.isFormEnabled = false;
  }
}
