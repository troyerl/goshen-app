import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-cards',
  template: `
      <div class="cards">
          <app-home-modal [data]="modalData"></app-home-modal>
          <app-card-component *ngFor="let alert of alertsList" [data]="alert" [eventBoolean]="false" [homeBoolean]="homeBoolean" (modalFunction)="setAlertModalData($event)"></app-card-component>
          <app-card-component *ngFor="let event of eventsList" [data]="event" [eventBoolean]="true" [homeBoolean]="homeBoolean"></app-card-component>
      </div>
  `,
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  @Input() events: {};
  @Input() alerts: {};
  eventsList = [];
  alertsList = [];
  modalData = {title: '', date: '', message: ''};

  @Input() homeBoolean: boolean;

  constructor() {}

  setAlertModalData(data: {title: string, date: string, message: string}) {
    this.modalData = data;
  }

  ngOnInit() {
    Object.values(this.alerts).map(item => this.alertsList.push(item));
    Object.values(this.events).map(item => this.eventsList.push(item));
  }

}
