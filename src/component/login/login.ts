import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Temporary hardcoded username and password for development only
const TEMP_PASSWORD = 'temppass123';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule]
})

export class Login {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor() {
    // Pre-fill with temporary credentials for testing
    this.username = '';
    this.password = TEMP_PASSWORD;
  }

  ngOnInit() {

  }

  onLogin() {
    // Use temporary hardcoded credentials for login check
    if (this.username != "" && this.password === TEMP_PASSWORD) {
      this.loginError = false;
      console.log('Login successful');
      this.ifLoginSuccess(this.username);
    } else {
      this.loginError = true;
      console.log('Login failed');
      setTimeout(() => {
        this.loginError = false;
      }, 5000);
    }
  }

  ifLoginSuccess(username: string) {
    console.log('Login was successful, redirecting...');
    // redirect to the home component
    window.location.href = '/home'+ '?username=' + encodeURIComponent(username);
  }
  
}
