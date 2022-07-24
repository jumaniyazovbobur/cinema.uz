import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-uz-kino',
  templateUrl: './uz-kino.component.html',
  styleUrls: ['./uz-kino.component.css']
})
export class UzKinoComponent implements OnInit {
  genre = '';
  country = '';
  year = '';
  category = '';

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
    this.router.navigate(['/login']);
  }

  toUzKino() {
    this.router.navigate(['/uz-kino']);
  }
}
