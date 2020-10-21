import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
  .parent {height: 100px;}
`]
})
export class AppComponent {
  title = 'flex';
}
