import { GoodsServiceService } from './../../services/goods-service.service';
import { Component, OnInit } from '@angular/core';
import { Igoods } from 'src/app/models/igoods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  goods:Array<Igoods>=[]  // Array<Igoods> OR Igoods[]

  constructor(private goodService:GoodsServiceService) { }

  ngOnInit(): void {
    this.getAllGoods()
  }

  getAllGoods(){
    this.goodService.getAllGoods().subscribe(res=>{
      /********  if we use valuechanges way ***********/
      // console.log(res)
      // this.goods = res
      /********  if we use snapshotchanges way ***********/
     this.goods=res.map(ele=>{
        return {
          id:ele.payload.doc.id,
          good_name:(ele.payload.doc.data() as Igoods).good_name,
          price:(ele.payload.doc.data() as Igoods).price,
          photoUrl:(ele.payload.doc.data() as Igoods).photoUrl,
          /// OR ///
          //...(ele.payload.doc.data() as Igoods)

        }
      })
    })
  }
  AddToCart(id:string|undefined){
    console.log(' Added '+id)
  }
}
