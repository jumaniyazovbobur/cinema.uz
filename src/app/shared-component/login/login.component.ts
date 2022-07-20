import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public username = '';
  // public password = '';

  public username = 'jumaniyazov.bobur@mail.ru';
  public password = '123456';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {

  }


  logIn() {
    console.log(this.username);
    console.log(this.password);

    const json = {
      'email': this.username,
      'password': this.password
    }
    this.loginService.login(JSON.stringify(json)).subscribe((value) => {
      console.log(value);
      if (value) {
        LocalStorageSecurity.setItem('userDetail', JSON.stringify(value));
        LocalStorageSecurity.setItem('jwt', value['jwt']);

        if (value.role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['']);
        }
      }
    });

  }
}
