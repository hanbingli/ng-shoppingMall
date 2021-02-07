import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  catagories: string[]=[
    'food', 
    'drinks',
    'electronics',
    'health',

  ]
  items: Item[] = [
    {
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
    {
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
    {
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
    {
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
    {
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
  ];

  itemsState= new Subject< Item[]>();

  
  getCat(){
    return this.catagories.slice()
  }
   
  getItems(){
    return this.items.slice()
  }

  addItem(item:Item){
    this.items.push(item);
    this.itemsState.next(this.items.slice())

  }


}
