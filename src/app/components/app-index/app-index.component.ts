import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.css']
})
export class AppIndexComponent implements OnInit {
  page = 'Home';
  constructor() { }

  ngOnInit() {
  }

  changePage(pageItem: {name: string}) {
    this.page = pageItem.name;
  }

}
