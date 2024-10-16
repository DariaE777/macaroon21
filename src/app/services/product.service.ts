import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():ProductType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        orderInfo: {
          quantity: '1 шт.',
          price: '1.70 руб.'
        }
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        orderInfo: {
          quantity: '1 шт.',
          price: '1.70 руб.'
        }
      },
      {
        image: '3.png',
        title: 'Макарун с ванилью',
        orderInfo: {
          quantity: '1 шт.',
          price: '1.70 руб.'
        }
      },
      {
        image: '4.png',
        title: 'Макарун с фисташками',
        orderInfo: {
          quantity: '1 шт.',
          price: '1.70 руб.'
        }
      },
    ]
  }
}
