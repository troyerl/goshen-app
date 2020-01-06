import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-cards',
  template: `
      <div class="cards">
          <app-card-component *ngFor="let alert of alertsList" [data]="alert" [eventBoolean]="false"></app-card-component>
          <app-card-component *ngFor="let event of eventsList" [data]="event" [eventBoolean]="true"></app-card-component>
      </div>
  `,
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  @Input() events: {};
  @Input() alerts: {};
  eventsList = [];
  alertsList = [];

  constructor() {}

  ngOnInit() {
    Object.values(this.alerts).map(item => this.alertsList.push(item));
    Object.values(this.events).map(item => this.eventsList.push(item));
  }

}
