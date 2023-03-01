import {Component, OnInit} from '@angular/core';
import * as qrcode from 'qrcode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData={
    id:0,
    img:''
  }
  ngOnInit(): void {
  }
  onLogIn(data:any){
    if (data.otpauth_url){
      /*qrcode.toDataURL(data.otpauth_url,(err:any,d:string)=>{
        this.loginData.img=d;
      });*/
      this.loginData.img=data.otpauth_url;
    }
  }
}
