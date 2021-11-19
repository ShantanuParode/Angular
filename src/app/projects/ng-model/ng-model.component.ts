import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  show = false;
  onGen(){
    this.show = true;
  }

  input1: string = "";

  sFname = "Shantanu";
    sLname = "Parode";
    sAdd1 = " Plot No. 19 B2 ";
    sAdd2 = "Vidyut Colony, Begampura";
    sCity = "Aurangabad";
    sState = "Maharashtra";
    sCountry = "India";
    sPin = "431004";
    sPhone = "8087538924";
    sEmail = "shantanurparode@gmail.com";

    rFname = "Makoto";
    rLname = "Shinkai";
    rAdd1 = "1-18 Hikari Apartment";
    rAdd2 = "Sumiyoshicho";
    rCity = "Shinjuku City";
    rState = "Tokyo";
    rCountry = "Japan";
    rPin = "1620065";
    rPhone = "818087538924";
    rEmail = "makotoshinkai@gmail.com";

  onReset() {
    console.log(this.sFname);
    this.sFname = "";
    this.sLname = "";
    this.sAdd1 = "";
    this.sAdd2 = "";
    this.sCity = "";
    this.sState = "";
    this.sCountry = "";
    this.sPin = "";
    this.sPhone = "";
    this.sEmail = "";

    this.rFname = "";
    this.rLname = "";
    this.rAdd1 = "";
    this.rAdd2 = "";
    this.rCity = "";
    this.rState = "";
    this.rCountry = "";
    this.rPin = "";
    this.rPhone = "";
    this.rEmail = "";

    this.show=false;
  }
}