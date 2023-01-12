import { Food, foods } from "./food";

export class cartItem {
    price!: number;
    static food: any;
    food: foods;
    quantity: number = 1;
    constructor(food: foods) {
        this.food = food;
    }
    getprice(): number {
        return this.food.price * this.quantity;
    }
}

// export interface CartItem {
//     price: number
//     food: Food
//     quantity: number
// }