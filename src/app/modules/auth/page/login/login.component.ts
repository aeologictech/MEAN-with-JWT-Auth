import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  loginForm: FormGroup;

  createForm() {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login(detail) {
    const loginDetails = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }; 
    this.service.login(loginDetails).subscribe(response => {
      if (response['data'] !== undefined) {
        if (response['data']['token']) {
          Swal.fire('Logged In', 'Logged in sucessfully', 'success').then((result) => {
            if (result['value']) {
              window.location.href = 'login';
            }
          });
        }
      } else if (response['status'] === 201) {
        Swal.fire('Oops...', response['message'], 'error');
      } else if (response['status'] === 210) {
        Swal.fire('Oops...', response['message'], 'error');
      } else {
        Swal.fire('Oops...', 'Something went wrong. Please try again', 'error');
      }
    }, error => {
      Swal.fire('Oops...', 'Something went wrong. Please try again', 'error');
    });
  }
   ngOnInit() {}
}
