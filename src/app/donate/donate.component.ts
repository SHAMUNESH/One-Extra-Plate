import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms'
import { FormArray } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

  title = 'AngularForms';
  api_key = 'f096bbad264f4d80916d23a4f51886dd';

  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;
  ipAddress = '113.193.189.52';

  city = 'Pune';
  
  region = '';
  
  country = 'IN';
    

  constructor(private http:HttpClient) { }

  

  

  ngOnInit() {

      this.getGeolocationData();

  }

  

  getGeolocationData()

  {

    this.http.get(this.url).subscribe((res:any)=>{
      this.ipAddress = res.data.ip_address;

      this.city = res.data.city;

      this.region = res.data.region;

      this.country = res.data.country;

      console.log(res.data)

    });

  }
}
  

