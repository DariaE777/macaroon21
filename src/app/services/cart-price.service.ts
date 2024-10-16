import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPriceService {
  price: number = 0;
  constructor() { }
}
