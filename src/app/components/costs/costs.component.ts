import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {

  list = [{
    id: 1,
    date: '10/11/20',
    name: 'Jardinagem Pelo Lar',
    cost: '850,00',
    description: 'Manutenção do jardim principal',
  },
  {
    id: 2,
    date: '07/11/20',
    description: 'Distribuidora de água para o condomínio.',
    name: 'Copasa',
    cost: '7.342,59',
  },
  {
    id: 3,
    date: '07/11/20',
    name: 'Cemig',
    cost: '9.756,20',
    description: 'Distribuidora de energia para o condomínio',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
