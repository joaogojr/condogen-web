import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  date;
  description;

  list = [{date: '10-05-2020', description: 'As 15:30 Reunião de Condomínio'},{date: '10-05-2020', description: 'As 17:30 Manutenção da Piscina'}];

  constructor() { }

  ngOnInit(): void {
  }

  eventBtn() {
    console.log(this.date);
    console.log(this.description);
  }

}
