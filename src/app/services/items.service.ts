import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

import { Item } from '../models/item.model';

import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  catagories: string[]=[
    'food', 
    'drinks',
    'electronics',
    'health',

  ]

  newItem: Item;

  private cart$$: Item[] = [];
  public cart$: Subject<Item[]> = new Subject<Item[]>();

  private itemCount$$: number = 0;
  public itemCount$: Subject<number> = new Subject<number>();


  getCat(){
    return this.catagories
    // return this.http
        // .get<Item[]>(
        //   'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json'
          
        // )
        // .pipe(
        //   map(items => {
        //     return items.map(item=> item.catagory            
        //     );
        //   }),
       
  }
   
  getItems(){
    return this.http
    .get<Item[]>(
      'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json'
      
    )

   
  }

  addItem(item:Item){
    
    this.newItem=item;
    this.http
    .post(
        'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json', 
        this.newItem)
    .subscribe(response =>{
    console.log(response)
})

  }

  addToCart(item:Item){
    console.log(this.cart$$)
    this.cart$$.push(item);
    this.cart$.next(this.cart$$.slice())

    // this.itemCount$$= this.cart$$.length
    // this.itemCount$.next(this.itemCount$$)

    console.log(this.itemCount$$)
  }

  getItemCount(){
    this.itemCount$$= this.cart$$.length
    this.itemCount$.next(this.itemCount$$)


  }




}
