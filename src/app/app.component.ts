import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tennis-app';
  page = 'Home';
  url = window.location.href;
  appCheck = !!this.url.split('?')[1];
}
