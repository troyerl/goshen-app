import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Input() page: string;
  notifcationNumber = 3;
  @Output() changePage = new EventEmitter<{name: string}>();
  constructor() {}

  changeHome() {
    this.changePage.emit({name: 'Home'});
  }
  ngOnInit() {}
}
