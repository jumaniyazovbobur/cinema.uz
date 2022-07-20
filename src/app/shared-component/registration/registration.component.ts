import {Component, OnInit} from '@angular/core';
import {ProfileDTO} from "../../dto/profileDTO";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public profileDTO: ProfileDTO;

  constructor(private registrationService: RegistrationService) {
    this.profileDTO = new ProfileDTO;
  }

  ngOnInit(): void {

  }

  registration() {
    const json = {
      'email': this.profileDTO.email,
      'password': this.profileDTO.password,
      'name': this.profileDTO.name,
      'surname': this.profileDTO.surname
    }
    console.log(json)
    this.registrationService.registration(JSON.stringify(json)).subscribe(value => {
      console.log(value);
    });
  }
}
