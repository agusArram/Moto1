import { Injectable } from '@angular/core';

//el contrato de producto, si o si producto va a tener estas propiedades
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}
//interface siempre arriba de este inyectable, sino da error
@Injectable({
  providedIn: 'root'
})

export class Products {
  //aca es nuestro producto, se deberia llamar una api para inyectar los datos
  //cree un array con 4 objetos
  private products: Product[] = [
    {
      id: 1,
      name: 'Honda Transa LP',
      description : 'Ideal para ciudad',
      price: 6500,
      img: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      name: 'Kawasaky 600',
      description: 'Potente y elegante',
      price: 9200,
      img: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      name: 'Kawasaky KX 250',
      description: 'Moderna y económica',
      price: 3900,
      img: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 4,
      name: 'Suzuki 1200',
      description: 'Moderna y económica',
      price: 13900,
      img: '/img/suzuki-1200.jpg'
    },
    {
      id: 5,
      name: 'Suzuki 1200',
      description: 'Moderna y económica',
      price: 13900,
      img: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 4,
      name: 'Suzuki 1200',
      description: 'Moderna y económica',
      price: 13900,
      img: '/img/honda-transalp.jpg'
    }
  ];

  constructor() {}

  //un metodo get que decvuelve Prodcuts
  getProducts():Product[]{
    return this.products;
  }
}
