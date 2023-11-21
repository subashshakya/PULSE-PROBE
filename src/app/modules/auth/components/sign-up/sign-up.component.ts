import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signUpForm: FormGroup;
  public value:number | undefined;
  public signupRole = ['Doctor', 'Patient', 'Lab'];
  public isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        rePassword: ['', [Validators.required, Validators.minLength(3)]],
        signupAs: ['', Validators.required],
        mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      }
    )
  }

  submitForm() {
    
  }
}
