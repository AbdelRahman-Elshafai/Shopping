import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/home/product-detail/product-detail.component';

const routes: Routes = [
  {path: '' , redirectTo : '/home' , pathMatch: "full"},
  {path : 'login' , component:SignInFormComponent},
  {path: 'register' , component:SignUpFormComponent},
  {path: 'home' , component:HomeComponent},
  {path : 'home/:id' , component:ProductDetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
