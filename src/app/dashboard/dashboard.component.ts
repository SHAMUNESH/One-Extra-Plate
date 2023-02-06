import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../shared/apicall.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public apicallService : ApicallService, public route : Router){}

  ngOnInit(): void {
    if(localStorage.getItem('token'))
    this.apicallService.gotoDashboard(localStorage.getItem('token')).subscribe(res => {
      if(res && res['status'] === 'ok'){
        console.log('we are in dashboard')
      }else{

        console.log('Something went wrong in dashboard...')

      }
    }, (err) => {
      if(err) {
        console.log('We got an error...')
      }
    })
  }
  OnLogout() {
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}

