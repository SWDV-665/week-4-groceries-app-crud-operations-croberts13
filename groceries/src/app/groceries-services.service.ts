import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServicesService {

  items = [
    {
      name: 'Milk',
      quantity: 2,
    },
    {
      name: 'Bread',
      quantity: 3,
    },
    {
      name: 'Eggs',
      quantity: 12,
    },
    {
      name: 'Juice',
      quantity: 1,
    },
  ];

  constructor() { }

  removeItem(item,index) {
    this.items.splice(index,1);
  }
}
