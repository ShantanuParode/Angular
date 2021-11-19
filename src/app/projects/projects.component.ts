import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }


    gotoSignup() {
      this.router.navigate(['signup'])  }

  ngOnInit(): void {
  }

  projectItems =[
    {
      title: "Simple Notepad",
      desc: "Add styling to the text in input field and see the result in the notepad.",
      thumbnail: "./assets/notepad.png",
      route: '/notepad'
    },
    {
      title: "Generate Address Envolope",
      desc: "Enter sender's and receiver's address to generate address envolope",
      thumbnail: "./assets/address.png",
      route: '/address-envolope'


    },
    {
      title: "SignUp Page",
      desc: "Create a responsive sign up form and add routing to it.",
      thumbnail: "./assets/signup form.png",
      route: '/signup'
    },
    {
      title: "Login Page",
      desc: "Create a responsive login form and add routing to it.",
      thumbnail: "./assets/login form.png",
      route: '/login'
    }
  ]

}
