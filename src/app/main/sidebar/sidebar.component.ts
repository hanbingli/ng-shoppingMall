import { Component, OnInit, OnChanges } from '@angular/core';
import { Subject, Observable, BehaviorSubject, Subscription } from 'rxjs';
import { catchError, first, map, shareReplay } from 'rxjs/operators';

import { ItemsService } from '../../services/items.service';
import { FilterService } from '../../services/filter.service';
import { filter } from 'rxjs/operators';


import { Item } from 'src/app/models/item.model';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public readonly loadedItems$ = this.itemsService.loadedItems$;
  public readonly searchQuery$ = this.filterService.searchQuery$;
  public readonly selectedCat$ = this.filterService.selectedCat$;


  itemsSub: Subscription;
  // filterSub: Subscription;
  

  public sortingField$: string = '';
  public sortingOption$: string = '';

  loadedCat: string[];
  loadedItems: Item[];
  filteredItems: Item[];

  // public readonly searchField$ = this.filterService.searchField$;

  private shownItems$$ = new BehaviorSubject<Item[]>([]);
  public readonly shownItems$ = this.shownItems$$.asObservable();

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.loadedCat = this.itemsService.getCat()
    this.itemsService.getItems();
    this.itemsSub = this.loadedItems$.subscribe(
      (items: Item[]) => {
        this.loadedItems = items;
        this.filteredItems =items;
        console.log(this.loadedItems)
        this.shownItems$$.next(this.loadedItems);
      }
    );
   

  }



  setCat(cat){
    this.filterService.setCat(cat);
    console.log('cathit')
  
   

    // if(cat == ''){
    //   this.filterService.setSearch('');
    //   // this.sortingField$= '';
    // }else{

    //   this.filterService.setCat(cat);
    // }

  }
  
  filterSub: Subscription=this.selectedCat$.subscribe(
    ((cat:string)=>{
      if(cat.length === 0){
        this.filteredItems= this.loadedItems;
      }else{
        this.filteredItems = this.filteredItems.filter(item =>
          item.catagory == cat
        );
      }
      this.shownItems$$.next(this.filteredItems)
     console.log(cat)
      console.log( this.filteredItems)
    })
  )



  searchSub: Subscription=this.searchQuery$.subscribe(
    ((query:string)=>{
      if(this.filteredItems){
        if(query.length ===0 ){
          this.filteredItems = this.loadedItems
          this.shownItems$$.next( this.filteredItems)
        }
        else if(this.filteredItems.length === 0){
          this.filteredItems = this.loadedItems
        }else{
        
        this.filteredItems = this.filteredItems.filter(
          item => item.name.toLowerCase().includes(query.toLowerCase())
        );
      }
      this.shownItems$$.next( this.filteredItems)
     console.log(query)
      console.log( this.filteredItems)

      }

       
    })
  )


  onChangeSorting({ value }: { value: string }) {

    this.sortingField$ = 'price';
    this.sortingOption$ = value;
  }

  onClear() {
    this.filteredItems = this.loadedItems;
    this.shownItems$$.next( this.filteredItems)
  }




}
