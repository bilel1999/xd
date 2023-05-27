import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthenticationService,private route:Router){

  }
  canActivate(){
    if(this.service.IsLoggedIn()){
    return true;
    }else{
      this.route.navigate(['login'])
      return false;
    }
  }
  
}