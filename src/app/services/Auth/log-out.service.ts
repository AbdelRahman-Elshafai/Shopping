import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {
  @Output() loggedOut:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() loggedIn:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onLoggingIn(){
    this.loggedIn.emit();
  }

  onLoggingOut(){
    this.loggedOut.emit();
  }
}
