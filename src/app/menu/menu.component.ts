import { Component } from '@angular/core';
import { typefood } from '../typefood';
import { food } from '../food';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foodArr: typefood[] = food;

  constructor(private cartService: CartService) { }

  addToCart(item: typefood): void {
    this.cartService.addToCart(item);
    alert(`${item.name} Added to the cart.`);
  }

}