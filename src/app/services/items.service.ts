import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap, find } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

import { Item } from '../models/item.model';
import { CartItem } from '../models/cartItem.model';

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

  public newItem: Item;

  private exist:boolean;

  private cart$$: CartItem[] = [];
  public cart$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  private itemCount$$: number = 0;
  public itemCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);


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

    
      if(this.itemCount$$){

        let findResult = this.findItem(item.id)

        if(findResult < 0 ){
          this.cart$$.push({item, amount:1});
          this.cart$.next(this.cart$$.slice());
          console.log(this.cart$$)

        }else{
          this.cart$$[findResult].amount++;
          this.cart$.next(this.cart$$.slice());
          console.log(this.cart$$)
          
        }
        

      }else{
        this.cart$$.push({item, amount:1});
        this.cart$.next(this.cart$$.slice());
        console.log(this.cart$$)

      }

      
    
    this.itemCount$$= this.cart$$.length
    this.itemCount$.next(this.itemCount$$)




    }

  // findCartItem(id:number){
  //   return this.cart$$
  // }


  findItem(id:number){
    let findResult:number;
      const found = this.cart$$.findIndex(i=> i.item.id === id);
      if(!!found ){

        findResult=found
       
      }else if (found === 0){

        findResult=found
      }
      else{
       findResult = -1
      }
      return findResult
    }

      


    //   for (var i = 0; i < this.cart$$.length; i++) {
    //     if (this.cart$$[i].item.id == id) {
    //         return i;
    //     }else{
    //       return -1;
    //     }
    //     }
    // }return -1;
    // }

      
  }



  // getCartItems(){
  //   return this.cart$$
  


  // }




