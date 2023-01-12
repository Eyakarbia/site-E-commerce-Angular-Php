import { CartService } from "src/app/services/cart.service";
import { cartItem } from "./cartltem";

export class cart {
   
    items: cartItem[] = [];
    get totalprice(): number {
        let totalp = 0;
        this.items.forEach(ltem => {
            totalp += ltem.getprice();
        });
        return totalp;
    }
  
    
}