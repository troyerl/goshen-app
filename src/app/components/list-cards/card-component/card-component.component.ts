import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() data: {};
  @Input() eventBoolean: boolean;
  @Input() homeBoolean: boolean;
  constructor() { }

  onClick() {
    console.log('test');
  }
  ngOnInit() {
  }

}
