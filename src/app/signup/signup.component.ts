import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      psw: new FormControl(''),
      cPsw: new FormControl('')
    });
  }
  loginBtnClick() {
    this.router.navigate(['login']);
  }
}