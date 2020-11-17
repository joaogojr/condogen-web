import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {

  list = [{description: 'Manutenção no encanamento do bloco A, entre as 08:00 e 10:00', date:'15-11-2020'}];

  constructor() { }

  ngOnInit(): void {
  }

}
