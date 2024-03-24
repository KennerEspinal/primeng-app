import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'products-orders',
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {

  isUpperCase: boolean = true;
  orderBy!: keyof Hero;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
  ];

  toggleUpperLower() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
