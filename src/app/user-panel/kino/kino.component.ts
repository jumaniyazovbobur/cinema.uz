import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";

@Component({
  selector: 'app-kino',
  templateUrl: './kino.component.html',
  styleUrls: ['./kino.component.css']
})
export class KinoComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }
  genre = '';
  country = '';
  year = '';
  category = '';
  ngOnInit(): void {
  }

  public login() {
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

  toKino() {
    const json = LocalStorageSecurity.getItem("userDetail");

    if (json) {
      this.router.navigate(['/kino']);
    } else {
      this.router.navigate([''])
    }
  }

  toHome() {
    this.router.navigate([''])
  }

  toSerial() {
    this.router.navigate(['/serial'])
  }

  toMultic() {
    this.router.navigate(['/multic'])
  }

  toAnime() {
    this.router.navigate(['/anime'])
  }

  toUzKino() {
    this.router.navigate(['/uz-kino'])
  }
}
