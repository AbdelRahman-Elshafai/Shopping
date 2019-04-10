import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/home/product-detail/product-detail.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogOutComponent } from './components/header/log-out/log-out.component';

const routes: Routes = [
  {path: '' , redirectTo : '/home' , pathMatch: "full"},
  {path: 'home' , component:HomeComponent},
  {path : 'home/login' , component:SignInFormComponent},
  {path: 'home/register' , component:SignUpFormComponent},
  {path: 'home/logout' , component:LogOutComponent},
  {path : 'home/cart' , component:CartListComponent},
  {path : 'home/:id' , component:ProductDetailComponent},
  {path: '**' , component:NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
