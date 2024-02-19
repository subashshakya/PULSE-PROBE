import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserRole } from '../../enums/auth.enum';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public signinForm: FormGroup;
  public output: any;
  public isLoading:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.signinForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  public signinFormSubmit(): void {
    let formValues = {
      "userName": this.signinForm.get('name')?.value,
      "email": this.signinForm.get('email')?.value,
      "password": this.signinForm.get('password')?.value,
    }
    this.authService.signIn(formValues).subscribe(res => {
      this.output = res;
      localStorage.setItem('jwt', res?.token)
      localStorage.setItem('userId', res?.userId)
      if (this.output?.role === UserRole.Doctor) {
        this.messageService.add({severity:'success', summary:'Welcome Doctor'});
        this.router.navigate(
          ['/doctor'],
          { queryParams: { userData: this.output }}
        );
      }
      if (this.output?.role === UserRole.Patient) {
        this.messageService.add({severity:'success', summary:'Welcome User'});
        this.router.navigate(
          ['/patient'],
          { queryParams: { data: this.output }}
        );
      }
      if (this.output?.role === UserRole.Lab) {
        this.messageService.add({severity:'success', summary:'Login Successful'});
        this.messageService.add({severity:'success', summary:'Service Message'});
        this.router.navigate(
          ['/lab'],
          { queryParams: { data: this.output }}
        )
      }
    }, err => {
      this.messageService.add({severity:'error', summary:'Invalid values in login form'})
    });
  }

  public navigateToSignup = (): void => {
    this.router.navigate(['/auth/sign-up']);
  }
}
