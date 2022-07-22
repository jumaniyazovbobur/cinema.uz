import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slideIndex = 1;
  constructor() {
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
  }


  plusSlides(n: number) {
    this.slideIndex += n
    this.showSlides(n);
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

}




