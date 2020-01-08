import { Component, OnInit } from '@angular/core';

import { Event } from '../../models/event.model';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  events = [
    new Event('(H) Bethany', '08/03/19', '1216 S Indiana Ave, Goshen, IN 46526', '4:30 PM', '6:30 PM'),
    new Event('(A) West Noble', '01/04/20', '5112 Lincolnway S, Ligonier, IN 46767', '4:30 PM', '6:30 PM'),
  ];
  alerts = [
    new Alert('Practiced Cancelled', '12/18/19', 'Practice has been cancelled due to weather. Hope you all have a nice day off and get some rest, it\'s going to be a hard practice tomorrow.'),
    new Alert('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', '12/18/19', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
