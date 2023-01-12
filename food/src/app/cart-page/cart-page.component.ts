import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cartItem } from '../shared/models/cartltem';
import { cart } from '../shared/models/cart';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: cart;

  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {

  }
  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItme: cartItem): void {
    this.cartService.removeFromCart(cartItme.food.id);
    this.setCart(); //istance load data
  }
  changeQuantity(ci: cartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity, ci.food.id);
    this.setCart();
  }
  user:any
    test()
    {
        this.cartService.findtest().subscribe(data=>{this.user=data
        console.log(this.user)
        })
    }



}
