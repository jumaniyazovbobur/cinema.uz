import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  toHome() {
    this.router.navigate(['']);
  }

  toKino() {
    this.router.navigate(['/kino']);
  }

  toSerial() {
    this.router.navigate(['/serial']);
  }

  toMultic() {
    this.router.navigate(['/multic']);
  }

  toAnime() {
    this.router.navigate(['/anime']);
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
}
