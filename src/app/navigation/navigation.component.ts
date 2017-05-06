/**
 * Created by Thibault on 07/05/2017.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styles: [`
  .routes{
    padding-left: 15px;
  }
  .routes__route{
    list-style:none;
    display:inline-block;
    font-size:1.2em;
    margin-right: 10px;
    font-family:'Arial', sans-serif;
  }
  .routes__route--active,
  .routes__route--active:visited{
    font-weight:600;
    text-decoration: none;
    color:#000;
  }
`]
})
export class NavigationComponent {

}
