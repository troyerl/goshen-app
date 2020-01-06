import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 'Home';
  title = 'tennis-app';

  changePage(pageItem: {name: string}) {
    this.page = pageItem.name;
  }
}
