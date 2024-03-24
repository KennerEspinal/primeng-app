import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'products-orders',
  templateUrl: './orders.component.html',
  styles: ``
})
export class OrdersComponent {
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color:  Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color:  Color.red
    },
    {
      name: 'Daredevil',
      canFly: false,
      color:  Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color:  Color.green
    },
  ];
  isUpperCase: boolean = true;

  toggleUpperLower() {
    this.isUpperCase = !this.isUpperCase;
  }
}
