import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-component',
  templateUrl: './setting-component.component.html',
  styleUrls: ['./setting-component.component.css']
})
export class SettingComponentComponent implements OnInit {
  user = {
    FullName: 'Logan Troyer',
    email: 'troyerlogan@gmail.com',
    phone: '574-312-1102',
    username: 'troyerl'
  };
  constructor() { }

  ngOnInit() {
  }

}
