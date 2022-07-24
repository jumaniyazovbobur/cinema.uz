import { Component, OnInit } from '@angular/core';
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const json = LocalStorageSecurity.getItem("userDetail");

    if(json){
      if (json.role === 'ROLE_ADMIN') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['']);
      }

    }else {
      this.router.navigate(['/login']);
    }
  }

  toHome() {
    this.router.navigate([''])
  }

  toKino() {
    const json = LocalStorageSecurity.getItem("userDetail");

    if (json) {
      this.router.navigate(['/kino']);
    } else {
      this.router.navigate([''])
    }
  }

  toSerial() {
    this.router.navigate(['/serial'])
  }
}
