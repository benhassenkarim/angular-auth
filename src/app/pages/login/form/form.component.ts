import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {EventEmitter, Injectable} from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Output('onLogin') onLogin= new EventEmitter();
  form!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {
  }
  ngOnInit(): void {
    this.form=this.formBuilder.group({

      email:'',
      password:'',

    });
  }

  submit() {
    this.authService.login(this.form.getRawValue()).subscribe(
      res => this.onLogin.emit(res)

    );

  }
}
