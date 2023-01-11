import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-using-wrapper';

  hello(event: CustomEvent): void {
    console.log(event.detail);
  }
}
