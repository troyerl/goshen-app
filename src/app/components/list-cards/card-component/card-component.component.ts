import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() data: {title: string, date: string, message: string};
  @Input() eventBoolean: boolean;
  @Input() homeBoolean: boolean;
  @Output() modalFunction = new EventEmitter<{title: string, date: string, message: string}>();
  constructor() { }

  onClick() {
    this.modalFunction.emit({title: this.data.title, date: this.data.date, message: this.data.message});
  }
  ngOnInit() {

  }

}
