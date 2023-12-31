import { Component , OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public products : any =[];
  public grandTotal : any;

  constructor(private cartService : CartService){

  }

  ngOnInit(): void {
      this.cartService.getproduct()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalprice();
      })
  }

  removeItem(item:any){
     this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAlCart();
  }

}
