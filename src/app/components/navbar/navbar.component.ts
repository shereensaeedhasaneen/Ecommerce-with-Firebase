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
  constructor(private authService:AuthServiceService , private router:Router) { }

  ngOnInit(): void {
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
