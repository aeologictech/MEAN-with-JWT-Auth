import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'login-with-JWT';

  constructor(
    private fb: FormBuilder,
    private service: AuthService
  ) {
    this.createForm();
  }

  loginForm: FormGroup;

  createForm() {
    this.loginForm = this.fb.group({
      email : ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(detail) {
    console.log(detail);
    this.service.login(detail).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
}
