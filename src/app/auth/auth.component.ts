import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule, FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';


import { AuthService, AuthResponseData } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent  implements OnInit{

  authForm: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService, private router: Router
    ) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null), 
      'password': new FormControl(null), 
    })

  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    console.log(this.authForm)
    console.log(this.authForm.value)
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/items']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  

}
