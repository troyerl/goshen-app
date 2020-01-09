import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
  @Input() alertInfo: {title: string, date: string, message: string};
  @Output() setAlertModalData = new EventEmitter<{title: string, date: string, message: string}>();
  constructor() { }

  ngOnInit() {
  }

  setNewsData() {
    this.setAlertModalData.emit({title: this.alertInfo.title, date: this.alertInfo.date, message: this.alertInfo.message});
  }

}
