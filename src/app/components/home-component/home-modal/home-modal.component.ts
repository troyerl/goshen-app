import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {
  @Input() data: {};
  test: {};
  constructor() { }

  ngOnInit() {
    if (this.data) {
      console.log();
    }
  }

}
