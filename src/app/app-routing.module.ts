import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

const routes: Routes = [
  {path : 'login' , component:SignInFormComponent},
  {path: 'register' , component:SignUpFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
