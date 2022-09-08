import { Router } from '@angular/router';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean=false
  is_Exist_user:boolean=false;
  constructor(private authService:AuthServiceService , private router:Router) { }

  ngOnInit(): void {
    this.check_If_Exist_User()
  }

  check_If_Exist_User(){
    this.authService.check_If_Exist_User().subscribe(res=>{
      console.log(res)
      this.is_Exist_user= (res) ? true :false
      if(res){
        this.authService.userId=res.uid // ==> عشان اقراءه علطول في اي صفحه او في ال cart منغير مانعمل سبسكرايب تاني لل  check_If_Exist_User
      }
    })
  }

  logout(){
    this.authService.Logout()
    .then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(err=>{
      console.log(err)
    })
  }
}
