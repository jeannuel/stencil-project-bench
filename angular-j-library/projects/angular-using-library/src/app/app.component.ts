import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-using-library';

  hello(event: CustomEvent): void {
    console.log(event.detail);
  }
}
