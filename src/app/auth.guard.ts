import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router : Router){


  }
  canActivate(){
    if(localStorage.getItem('token')){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false
    }
    
  }
  
}
