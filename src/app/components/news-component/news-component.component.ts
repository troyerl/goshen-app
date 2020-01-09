import { Component, OnInit } from '@angular/core';
import {Alert} from '../../models/alert.model';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {
  alerts = [
    new Alert('Practiced Cancelled', '12/18/19', 'Practice has been cancelled due to weather. Hope you all have a nice day off and get some rest, it\'s going to be a hard practice tomorrow.'),
    new Alert('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', '12/18/19', 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'),
  ];

  modalData = {title: '', date: '', message: ''};

  constructor() { }

  ngOnInit() {
  }

  setAlertModalData(data: {title: string, date: string, message: string}) {
    this.modalData = data;
  }

}
