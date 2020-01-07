import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
  @Input() alertInfo: {};
  constructor() { }

  ngOnInit() {
  }

}
