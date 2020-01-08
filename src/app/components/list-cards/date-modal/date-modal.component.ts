import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.css']
})
export class DateModalComponent implements OnInit {
  @Input() data: {title: string, date: string, address: string, startTime: string, endTime: string};
  addressArray = [];
  addressLocation: string;
  constructor() { }

  ngOnInit() {
  }

  mapSelector() {
    this.addressArray = [];
    this.addressLocation = '';
    this.addressArray = this.data.address.split(' ');
    console.log(this.addressArray);
    this.addressArray.map((item, idx) => {
      if (idx === this.addressArray.length - 1) {
        this.addressLocation += item;
      } else {
        if (!this.addressLocation) {
          this.addressLocation = item + '+';
        } else {
          this.addressLocation += item + '+';
        }
      }
    });
    if ((navigator.platform.indexOf('iPhone') !== -1) ||
      (navigator.platform.indexOf('iPad') !== -1) ||
      (navigator.platform.indexOf('iPod') !== -1)) {
      window.open('maps://maps.google.com/maps?daddr=' + this.addressLocation);
    } else {
      window.open('https://maps.google.com/maps?daddr=' + this.addressLocation);
    }
  }

}
