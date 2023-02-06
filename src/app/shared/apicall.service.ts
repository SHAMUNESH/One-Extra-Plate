import { HttpClient ,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(public http : HttpClient) {

   }

   login(userData) {
    return this.http.post('http://localhost:3000/auth/login',userData)
   }

   registerUser(userData){
    return this.http.post('http://localhost:3000/auth/register',userData)
   }
   gotoDashboard(token){
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`
    })
    return this.http.get('http://localhost:3000/auth/dashboard',{headers : headers})
   }
}
