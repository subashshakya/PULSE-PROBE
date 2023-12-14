import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public signinForm: FormGroup;
  public output: any;
  public isLoading:boolean=false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.signinForm = formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  public signinFormSubmit(): void {
    let formValues = {
      "UserName": this.signinForm.get('name')?.value,
      "Email": this.signinForm.get('email')?.value,
      "Password": this.signinForm.get('password')?.value,
    }
    // this.authService.someMethod();
    this.authService.signIn(formValues).subscribe(res => {
      console.log(res);
      this.output = res;
    })
  }
}
