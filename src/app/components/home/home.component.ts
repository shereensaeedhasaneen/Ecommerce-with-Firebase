import { Component, OnInit } from '@angular/core';
import { Igoods } from 'src/app/models/igoods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goods:Array<Igoods>=[  // Array<Igoods> OR Igoods[]
    {good_name : 'Apple' , price:20 , photoUrl:'assets/images/apple.jpg'},
    {good_name : 'Banana' , price:50 , photoUrl:'assets/images/banana.jpg'},
    {good_name : 'kewy' , price:10 , photoUrl:'assets/images/kewy.jpg'},
    {good_name : 'Mango' , price:100 , photoUrl:'assets/images/mango.jpg'},
    {good_name : 'WaterMelon' , price:70 , photoUrl:'assets/images/watermelon.jpg'},
    {good_name : 'sterawberry' , price:20 , photoUrl:'assets/images/sterawberry.jpg'}


  ]
  constructor() { }

  ngOnInit(): void {
  }
  AddToCart(index:number){
    console.log(' Added '+this.goods[index])
  }
}
