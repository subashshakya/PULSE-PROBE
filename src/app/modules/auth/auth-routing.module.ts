import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";

const routes:Routes = [
     {
          path: '',
          component: SignInComponent
     },
     {
          path: 'sign-in',
          component: SignInComponent
     },
     {
          path: 'sign-up',
          component: SignUpComponent
     },
     {
          path: 'forgot-password',
          component: ForgotPasswordComponent
     },
     {
          path: '**',
          redirectTo: '',
     }
]

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})

export class AuthRoutingModule {}