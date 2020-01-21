import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {
  @Input() first: boolean;
  constructor() { }

  ngOnInit() {
  }

}
