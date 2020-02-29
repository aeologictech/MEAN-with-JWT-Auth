import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { passwordValidator } from '../../../Validators/validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: AuthService,
    private fb: FormBuilder )
  {
    this.createForm(); 
    this.registerForm.controls.password.valueChanges
    .subscribe( 
      x => this.registerForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  registerForm: FormGroup;

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', [Validators.required, passwordValidator]]
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  register(detail) {
    const userDetails = {
      name: this.registerForm.controls.name.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
    }
    this.service.register(userDetails).subscribe(response => {
      if (response['status'] === 200) {
        Swal.fire('Regsitered', response['message'], 'success').then((result) => {
          if (result['value']) {
            window.location.href = 'login';
          }
        });
      } else if (response['status'] == 422) {
        Swal.fire('', response['message'], 'warning');
      } else {
        Swal.fire('Oops...', response['message'], 'error');
      }
    }, error => {
      Swal.fire('Oops..', 'Something went wrong. Please try again', 'error');
    });
  }


  ngOnInit() {}


}
