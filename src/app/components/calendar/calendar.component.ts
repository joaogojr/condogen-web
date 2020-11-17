import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date;
  description;

  list = [{}];

  constructor() { }

  ngOnInit(): void {
  }

  eventBtn() {
    console.log(this.date);
    console.log(this.description);
  }

}
