import { Component } from '@angular/core';
//importo la interfaz creada en services
import {Product} from '../../services/products';
import {Products} from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Productos {
  //aca voy a intecatar los datos, inyerccion de dependencias
  products: Product[] = [];

  constructor(private product : Products) {
    this.products = this.product.getProducts();
  }

}
