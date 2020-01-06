import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.css']
})
export class FooterItemComponent implements OnInit {
  @Input() navElement: {name: string, icon: []};
  @Input() page: string;
  constructor() { }

  ngOnInit() {
  }

}
