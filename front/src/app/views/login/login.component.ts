import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public error = '';

  form:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService: UserService, private route: Router) {
    this.form=this.formBuilder.group({
      mail:this.formBuilder.control(null,[Validators.required]),
      password:this.formBuilder.control(null,[Validators.required])
    })
  }

  ngOnInit(): void {}

  //login(loginForm: NgForm) {
    login() {
    console.log(this.form.value);
    this.userService.login(this.form.value).subscribe(
      (response: any) => {
        this.userService.setToken(response.jwtToken);
        this.userService.setuser(response.user);
        this.userService.setLoggedInUserId(response.user._id); // Store the logged-in user's ID
        const role = response.user.role;
        console.log(role);

        if (role === 'Doctor'||'doctor') {
          this.route.navigate(['/doctor']);

        }
        if (role === 'admin'||'Admin') {
          this.route.navigate(['/admin']);
        }
           else {
          this.route.navigate(['/patient']);
        }
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }
}
