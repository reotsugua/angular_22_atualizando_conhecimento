import { Service } from '@angular/core';
import { ProductInterface } from '../interfaces/product';
import { iceCoffees, icecreams, milkshakes, smoothies } from '../data/products';

@Service()
export class ProductsService {
    getMilkShakes(): ProductInterface[] {
        return milkshakes;
    }
    getIceCreams(): ProductInterface[] {
        return icecreams;
    }

    getSmoothies(): ProductInterface[] {
        return smoothies;
    }

    getIceCoffees(): ProductInterface[] {
        return iceCoffees;
    }
}
