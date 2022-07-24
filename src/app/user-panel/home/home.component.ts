import {Component, OnInit} from '@angular/core';
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";
import {LoginService} from "../../shared-component/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public slideIndex = 1;
  constructor(private loginService:LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.slideIndex += n
    this.showSlides(n);
  }

  public login(){
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

  public toKino() {
    const json = LocalStorageSecurity.getItem("userDetail");

    if (json) {
      this.router.navigate(['/kino']);
    } else {
      this.router.navigate([''])
    }
  }

  currentSlide(n: number) {
    this.slideIndex = n;
    this.showSlides(n);
  }

  public showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      // @ts-ignore
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // @ts-ignore
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  toSerial() {
    this.router.navigate(['/serial'])
  }
}




