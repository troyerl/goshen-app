import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() data: {title: string, date: string, message: string, address: string, startTime: string, endTime: string};
  @Input() eventBoolean: boolean;
  @Input() homeBoolean: boolean;
  @Output() modalFunction = new EventEmitter<{title: string, date: string, message: string}>();
  @Output() eventFunction = new EventEmitter<{title: string, date: string, address: string, startTime: string, endTime: string}>();
  constructor() { }

  onClick(eventBool: boolean) {
    if (!eventBool) {
      this.modalFunction.emit({title: this.data.title, date: this.data.date, message: this.data.message});
    } else {
      this.eventFunction.emit({title: this.data.title, date: this.data.date, address: this.data.address, startTime: this.data.startTime, endTime: this.data.endTime});
    }
  }


  ngOnInit() {

  }

}
