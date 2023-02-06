import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../shared/apicall.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginUserForm : FormGroup;

  constructor(public apicallService : ApicallService, public router :Router) {
  this.loginUserForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('', [Validators.required])
  })
}
  ngOnInit(): void {
    
  }

  OnSubmit() {
    if(this.loginUserForm.valid){
      this.apicallService.login(this.loginUserForm.value).subscribe(res => {
        if(res && res['status'] === 'ok' && res['data']['response']  && res['data']['authToken']){
          localStorage.setItem('token',res['data']['authToken'])
          this.router.navigate(['/dashboard'])
        }
      },(err) => {
        console.log('We got an error in login....')
      })
    }
    console.log(this.loginUserForm.value)
  }
}
