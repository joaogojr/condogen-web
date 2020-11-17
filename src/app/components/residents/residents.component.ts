import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  name;
  email;
  password;
  phone;

  

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    const aux = {
      email: this.email,
      password: this.password,
      name: this.name,
      phone: this.phone,
      role: 'user'
    }

    this.http.genericPost(`/users`, aux, null).subscribe(() => {

    }, (error) => {
      alert('Erro')
    })
  }

}
