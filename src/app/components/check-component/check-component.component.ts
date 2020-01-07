import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-component',
  templateUrl: './check-component.component.html',
  styleUrls: ['./check-component.component.css']
})
export class CheckComponentComponent implements OnInit {
  appCheck = false;
  constructor() { }

  ngOnInit() {
    let url;
    url = window.location.href;
    this.appCheck = !!url.split('?')[1];
    this.appCheck = true;
  }

}
