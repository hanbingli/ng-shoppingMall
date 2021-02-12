import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from '../services/items.service';
import { CartItem } from '../models/cartItem.model';



export interface PeriodicElement {
  name: string;
  amount: number;
//  price: number;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})




export class CartComponent implements OnInit {

  
  cartItems$$:CartItem[];

  private cartItemsSub: Subscription;
  
  private cartListItems: PeriodicElement[];

  displayedColumns: string[]= ['name', 'price',  'amount',];
  dataSource:PeriodicElement[];


  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit(): void {
    this.cartItemsSub= this.itemsService.cart$.subscribe(items =>{
      this.cartItems$$= items;
    });
    console.log(this.cartItems$$)



    this.cartListItems= this.cartItems$$.map(
      item=>({name: item.item.name, price: item.item.price, amount:item.amount})
    );
    console.log(this.cartListItems)
    this.dataSource = this.cartListItems;

  }

  getTotalCost() {
    return this.cartListItems.map(i => i.amount*i.price).reduce((acc, value) => acc + value, 0);
  }
 




}


