import {Component, OnInit} from '@angular/core';
import {LocalStorageSecurity} from "../../common/util/localStorageSecurity";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public userDetail = '';

  constructor() {
  }

  ngOnInit(): void {
    const json = LocalStorageSecurity.getItem("userDetail");
    if (json) {
      const obj = JSON.parse(json);
      this.userDetail = obj['name'] + ' ' + obj['surname'];
    }
  }

}
