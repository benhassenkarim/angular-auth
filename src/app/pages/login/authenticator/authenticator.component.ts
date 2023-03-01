import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit{
  @Input('loginData') loginData={
    id:0,
    img:''
  };
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {
  }
  ngOnInit(): void {
    this.form=this.formBuilder.group({

      code:'',

    });
  }

  submit() {
    this.authService.authenticatorLogin(this.form.getRawValue()).subscribe(
      (res:any) =>
      {

      }
    );

  }
}
