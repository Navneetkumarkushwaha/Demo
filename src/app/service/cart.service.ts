import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  
  constructor() { }

  getproduct(){
   return  this.productList.asObservable();
  }

  setproduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtocart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalprice();
    console.log(this.cartItemList);
    console.log("hello");
  }
  
  getTotalprice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id == a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAlCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }


}
