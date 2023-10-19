import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: any;
  isShow: boolean = false;
  constructor(private readonly router: Router) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showPassword(inputId: string, toggleId: string) {
    const password: any = document.querySelector('#' + inputId);
    const list: any = window.document.getElementById(toggleId)?.classList;
    const type = password
      .getAttribute('type') === 'password' ?
      'text' : 'password';
    password.setAttribute('type', type);
    if (password.getAttribute('type') === 'text') {
      list.add("bi-eye");
      list.remove("bi-eye-slash");
    }
    else if (password.getAttribute('type') === 'password') {
      list.add("bi-eye-slash");
      list.remove("bi-eye");
    }
  }
}
