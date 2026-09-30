import { Component, input } from '@angular/core';
import { ProductInterface } from '../../interfaces/product';

@Component({
  imports: [],
  selector: 'dl-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<ProductInterface>();
}
