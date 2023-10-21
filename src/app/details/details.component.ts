import { Component, OnInit } from '@angular/core';
import { typefood } from '../typefood';
import { ActivatedRoute, Params } from '@angular/router';
import { food } from '../food';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  food: typefood = {} as typefood;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = + param["id"];
      this.food = food[this.id];
    })
  }
  addToCart(item: typefood): void {
    this.cartService.addToCart(item);
  }
}







