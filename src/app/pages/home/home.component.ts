import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  message= '';
constructor(
  private authService:AuthService
) {
}
  ngOnInit(): void {
  this.authService.user().subscribe({
    next:(res:any)=>{
      AuthService.authEmitter.emit(true);
     this.message=`Hi ${res.first_name}  ${res.last_name}`;
    },error:err=>{
      AuthService.authEmitter.emit(false);
      this.message=`Hi you are not authenticated `;
    }
    }
  );
  }

}
