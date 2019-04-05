import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
