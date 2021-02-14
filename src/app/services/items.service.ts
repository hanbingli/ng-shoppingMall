import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap, find } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject, Subscription } from 'rxjs';

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
    'drink',
    'electronics',
    'health',

  ]
  

  public newItem: Item;

  private exist:boolean;

  private cart$$: CartItem[] = [];
  public cart$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  private itemCount$$: number = 0;
  public itemCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private loadedItems$$ = new BehaviorSubject<Item[]>([]);
  public readonly loadedItems$ = this.loadedItems$$.asObservable();

  private readonly searchQuery$$ = new BehaviorSubject<string>('');
  public readonly searchQuery$: Observable<string> = this.searchQuery$$.asObservable();


  // private readonly selectedCat$$ = new BehaviorSubject<string>('');
  // public readonly selectedCat$: Observable<string> = this.selectedCat$$.asObservable();

  getCat(){

    return this.catagories

  }
   
  getItems(){
    return this.http
    .get<Item[]>(
      'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json'
    )
    .subscribe((items:Item[])=>{
      this.loadedItems$$.next(items)

    }, 
    err =>{
      console.log(err)
    }
    )  
  }



  // public readonly filteredApiModules$: Observable<Map<string, Item>> = combineLatest([

  //   this.loadedItems$,
  //   this.searchQuery$,
  // ]).pipe(
  //   map(([apiModules, searchQuery]: [[string, Item][], string]) => {

  //     const formattedSearchQuery = searchQuery.trim().toLowerCase();

  //     const filteredApiModules: [string, ApiModule][] = apiModules.filter(([, { title, tags }]) => {
  //       const isTitleMathSearchQuery = title.toLowerCase().includes(formattedSearchQuery);
  //       const isTagsMatchSearchQuery = tags.some(tag => tag.toLowerCase().includes(formattedSearchQuery));

  //       return isTitleMathSearchQuery || isTagsMatchSearchQuery;
  //     });

  //     return new Map<string, ApiModule>(filteredApiModules);
  //   }),
  // );




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
          this.cart$$.push({item,price:item.price, amount:1});
          this.cart$.next(this.cart$$.slice());
          // console.log(this.cart$$)

        }else{
          this.cart$$[findResult].amount++;
          this.cart$.next(this.cart$$.slice());
          // console.log(this.cart$$)
          
        }
        

      }else{
        this.cart$$.push({item,price:item.price, amount:1, });
        this.cart$.next(this.cart$$.slice());
        // console.log(this.cart$$)

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









    

      
  }







