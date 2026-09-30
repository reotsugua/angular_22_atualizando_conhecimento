import { Component, computed, signal, effect } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { iceCoffees, icecreams, milkshakes, smoothies } from '../../data/products';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [ProductCard, DecimalPipe],
  selector: 'dl-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
  milkshakes = milkshakes;
  icecreams = icecreams;
  smoothies = smoothies;
  iceCoffees = iceCoffees;

  cartItens = signal(0);

  showCartAlert = computed(() => this.cartItens() > 0);

  totalValueCart = computed(() => this.cartItens() * 18);

  constructor(){
    effect(() => {
      if (this.cartItens() > 0) {
        alert(`Carrinho atualizado: ${this.cartItens()} itens`);
      }
    })
  }

  addProduct(){
    this.cartItens.update(itens => itens + 1);
  }

  clearCart(){
    this.cartItens.set(0);
  }
}
