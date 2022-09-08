import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Iuser } from './../../models/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage:string=''
  constructor(private authService:AuthServiceService , private router:Router) { }

  ngOnInit(): void {
  }

  Login(FormValue:Iuser){
      this.authService.Login(FormValue.email , FormValue.password)
      .then(res=>{
        console.log(res)
        this.router.navigate(['/'])
      }).catch(err=>{
        console.log(err)
        this.errorMessage = err.message
      })

  }
}
