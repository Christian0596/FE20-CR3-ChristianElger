import { Component, OnInit } from '@angular/core';
import { typefood } from '../typefood';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Array<typefood> = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.cart) {
      total += item.price;
    }
    return total;
  }


  removeFromCart(index: number): void {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
    }
  }


  addToCart(item: typefood): void {
    this.cart.push(item);
  }


  calculateTotalWithDiscount(): number {
    const total = this.calculateTotal();
    const serviceFee = total * 0.1;
    let discountedTotal = total;

    if (total > 40) {
      discountedTotal = total * 0.85;
    }

    return discountedTotal + serviceFee;
  }

}