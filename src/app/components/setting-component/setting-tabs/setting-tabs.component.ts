import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-setting-tabs',
  templateUrl: './setting-tabs.component.html',
  styleUrls: ['./setting-tabs.component.css']
})
export class SettingTabsComponent implements OnInit {
  @Input() settingInfo: {};

  constructor() { }

  ngOnInit() {

  }

}
