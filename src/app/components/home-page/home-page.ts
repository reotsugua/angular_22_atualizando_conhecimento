import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { iceCoffees, icecreams, milkshakes, smoothies } from '../../data/products';

@Component({
  imports: [ProductCard],
  selector: 'dl-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
  milkshakes = milkshakes;
  icecreams = icecreams;
  smoothies = smoothies;
  iceCoffees = iceCoffees;
}
