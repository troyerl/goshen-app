import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {
  @Input() data: {title: string, date: string, message: string};
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
