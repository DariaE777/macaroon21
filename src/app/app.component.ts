import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantagesType} from "./types/advantages.type";
import {FormValuesType} from "./types/form-values.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CartPriceService} from "./services/cart-price.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ' +
        'ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];
  public products: ProductType[] = [];
  public price: number = 0;
  public formValues: FormValuesType = {
    productTitle: '',
    customerName: '',
    phone: ''
  };

  constructor(private productService: ProductService, public cartService: CartService,
              public cartPrice: CartPriceService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  makeOrder(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.price = +(product.orderInfo.price.split(' ')[0]);
    this.cartPrice.price += this.price;
    setTimeout(() => {
      alert(this.formValues.productTitle + " добавлен в корзину!");
    }, 650);
  }


}
