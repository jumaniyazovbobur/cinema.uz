import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";

@Component({
  selector: 'app-multic',
  templateUrl: './multic.component.html',
  styleUrls: ['./multic.component.css']
})
export class MulticComponent implements OnInit {
  genre = '';
  country = '';
  year = '';
  category = '';
  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  toMultic() {
    this.router.navigate(['/multic'])
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

  toAnime() {
    this.router.navigate(['/anime'])
  }

  toUzKino() {
    this.router.navigate(['/uz-kino'])
  }
}
