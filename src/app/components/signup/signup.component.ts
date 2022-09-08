import { UserService } from './../../services/user.service';
import { Iuser } from './../../models/iuser';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage:string=''

  constructor( private router:Router,private authService:AuthServiceService ,private userService:UserService) { }

  ngOnInit(): void {
  }

  signUp(formValue:Iuser){
    console.log(formValue)
    this.authService.signUp(formValue.email, formValue.password)
    .then(res=>{
      console.log(res)
      this.userService.AddNewUser(res.user?.uid , formValue.name , formValue.address)
      .then(
        ()=>{this.router.navigate(['/'])}
      )
      .catch(err=>console.log(err))
    }).catch(err=>{
      console.log(err)
      this.errorMessage = err.message
    })
  }
}
