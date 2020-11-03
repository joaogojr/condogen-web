import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {

  list = [{date: '10-05-2020', place: 'CEMIG', description: 'Conta de Luz', value: '2000'},{date: '14-05-2020', place: 'COPASA', description: 'Conta de água', value: '1600'}];

  constructor() { }

  ngOnInit(): void {
  }

}
