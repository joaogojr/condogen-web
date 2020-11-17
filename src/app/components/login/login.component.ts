import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthServiceCommon } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  icon = '../../../assets/images/icon-app.png'
  email: string;
  password: string;

  user: any;

  constructor(
    private readonly authService: AuthServiceCommon,
    private readonly localStorage: LocalStorage,
    private readonly httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (!this.email || this.password) {
      alert("Campos de usuário ou senha inválido.");
    } else {
      this.authService.login(
        this.email, this.password
      ).subscribe(
        (user) => {
          this.saveData(user);
        },
        (error) => {
          alert("Error")
        }
      );
    }
  }
  saveData(user) {
    this.user = user;
    this.authService.saveUser(this.user).then(() => {
      window.location.href = "/avisos";
    });
  }
  Login() {
    console.log(this.email, this.password)
    if (!this.email || !this.password) {
      alert("Campos de usuário ou senha inválido.");
    } else {
      window.location.href = "/avisos";
      // this.authService.login(
      //   this.email, this.password
      // ).subscribe(
      //   (user) => {
      //     this.saveData(user);
      //   },
      //   (error) => {
      //     alert("Error")
      //   }
      // );
    }
  }
}
