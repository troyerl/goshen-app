import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {
  @Input() userInfo: {};
  constructor() { }

  ngOnInit() {
  }

}
