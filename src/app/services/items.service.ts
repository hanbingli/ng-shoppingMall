import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { Item } from '../models/item.model';
import { CartItem } from '../models/cartItem.model';

import { AuthService } from '../auth/auth.service';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private filterService: FilterService,
  ) { }

  catagories: string[] = [
    'food',
    'drink',
    'electronics',
    'health',
  ]

  public newItem: Item;
  private items: Item[] = []

  private cart$$: CartItem[] = [];
  public cart$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  private itemCount$$: number = 0;
  public itemCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private loadedItems$$ = new BehaviorSubject<Item[]>([]);
  public readonly loadedItems$ = this.loadedItems$$.asObservable();

  public readonly searchQuery$ = this.filterService.searchQuery$;
  public readonly selectedCatagory$ = this.filterService.selectedCatagory$;

  public readonly filteredItems$ = combineLatest([this.loadedItems$, this.searchQuery$, this.selectedCatagory$]).pipe(
    map(([loadedItems, searchQuery, selectedCatagory]: [Item[], string, string]) => {
      const formattedSearchQuery = searchQuery.trim().toLowerCase();
      const filteredItems: Item[] = loadedItems.filter(item => {
        return item.name.toLowerCase().includes(formattedSearchQuery) && item.catagory.toLowerCase().includes(selectedCatagory);
        // const isTitleMatchSearchQuery = item.name.toLowerCase().includes(formattedSearchQuery);
        // const isTagMatchSearchQuery = item.catagory.toLowerCase().includes(selectedCatagory);
        // return isTitleMatchSearchQuery || isTagMatchSearchQuery;
      })
      console.log(filteredItems)
      return filteredItems;

    })
  )

  getCatagories() {
    return this.catagories
  }

  fetchItems() {
    return this.http
      .get<Item[]>(
        'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json'
      )
  }

  getItems() {
    this.fetchItems().subscribe(data => {
      this.items = data;
      this.loadedItems$$.next(this.items.slice());
    })
  }

  addItem(item: Item) {
    this.newItem = item;
    this.http
      .post(
        'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json',
        this.newItem)
      .subscribe(response => {
        console.log(response)
      })
  }

  addToCart(item: Item) {
    if (this.itemCount$$) {
      let findResult = this.findItem(item.id)
      if (findResult < 0) {
        this.cart$$.push({ item, price: item.price, amount: 1 });
        this.cart$.next(this.cart$$.slice());
      } else {
        this.cart$$[findResult].amount++;
        this.cart$.next(this.cart$$.slice());
      }
    } else {
      this.cart$$.push({ item, price: item.price, amount: 1, });
      this.cart$.next(this.cart$$.slice());
    }
    this.itemCount$$ = this.cart$$.length
    this.itemCount$.next(this.itemCount$$)
  }

  findItem(id: number) {
    let findResult: number;
    const found = this.cart$$.findIndex(i => i.item.id === id);
    if (!!found) {
      findResult = found
    } else if (found === 0) {
      findResult = found
    }
    else {
      findResult = -1
    }
    return findResult
  }
}







