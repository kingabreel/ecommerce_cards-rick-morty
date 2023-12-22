import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book';

  screen: string = 'main';

  updateScreen(screen: string) {
    this.screen = screen;
  }
}
