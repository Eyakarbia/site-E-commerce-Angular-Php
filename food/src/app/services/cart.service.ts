import { Injectable } from '@angular/core';
import { cart } from '../shared/models/cart';
import { cartItem } from '../shared/models/cartltem';
import { foods } from '../shared/models/food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // baseUrl = ''
  private cart: cart = new cart();

  constructor(private httpClient: HttpClient) { }


  addToCart(food: foods): void {
    let item = this.cart.items.find(item => item.food.id === food.id)
    if (item) {
      this.changeQuantity(food.id, item.quantity + 1);
      return;
    }

    this.cart.items.push(new cartItem(food))
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(itme => itme.food.id != foodId)
  }

  public findtest() {
    return this.httpClient.post<any>(environment.baseUrl + '/test.php', {});
  }

  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    console.log(quantity)
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart(): cart {
    return this.cart;
  }
}
