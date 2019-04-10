import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { InputComponent } from './components/shared/input/input.component';
import { SubmitComponent } from './components/shared/submit/submit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/home/single-product/single-product.component';
import { ProductDetailComponent } from './components/home/product-detail/product-detail.component';
import { ProductsService } from './services/Products/products.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationLinksComponent } from './components/header/navigation-links/navigation-links.component';
import { CartCounterComponent } from './components/header/cart-counter/cart-counter.component';
import { CartService } from './services/Cart/cart.service';
import { WishListComponent } from './components/header/wish-list/wish-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    SignUpFormComponent,
    InputComponent,
    SubmitComponent,
    HomeComponent,
    SingleProductComponent,
    ProductDetailComponent,
    FooterComponent,
    HeaderComponent,
    NavigationLinksComponent,
    CartCounterComponent,
    WishListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [ProductsService , CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
