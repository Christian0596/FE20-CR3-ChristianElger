import { Injectable } from '@angular/core';
import { typefood } from './typefood';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<typefood> = [];
  constructor() { 
  }
  addToCart(obj:typefood){
    this.cart.push(obj);
  }
  getCart(){
    return this.cart;
  }
  calcTotal(){
    let total : number = 0;
    this.cart.forEach((val) =>{
      total += val.price;
    })
    return total;
  }
}
