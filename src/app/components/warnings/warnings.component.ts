import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.css']
})
export class WarningsComponent implements OnInit {

  list = [{description: 'Goteira na garagem', date:'10-08-2020'},{description: 'Elevador estragado', date:'05-08-2020'}];

  constructor() { }

  ngOnInit(): void {
  }

}
