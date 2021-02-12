import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ItemsService } from '../../services/items.service';
import { FilterService } from '../../services/filter.service';


import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  public readonly searchQuery$ = this.filterService.searchQuery$;
  public readonly selectedCat$ = this.filterService.selectedCat$;
  public readonly searchField$ = this.filterService.searchField$;

  public  sortingField$: string = ''
  public  sortingOption$:string = ''


  

  loadedItems$: Observable<Item[]>;

 
  loadedCat: string[];

  searchMode:boolean;

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService,
    ) { }

    ngOnInit(){
      this.loadedCat = this.itemsService.getCat()
      this.itemsService.getItems();
      this.loadedItems$= this.itemsService.loadedItems$;

     
     
      // this.itemsSub = this.itemsService.getItems().subscribe(
      //   res=> {
      //     this.loadedItems=res;
      //     console.log(this.loadedItems)
  
      //   }
      // )

      // this.filterSub = this.filterService.searchInput$.subscribe(
      //   res=> {
      //     this.filterInput = res
         
      //   }
      // )
    }




    setCat(cat){
      if(cat == ''){
        this.filterService.setSearch('');
        // this.sortingField$= '';
      }else{

        this.filterService.setCat(cat);
      }
     
    }


    onChangeSorting({ value }: { value: string }){

      this.sortingField$= 'price';
      this.sortingOption$ = value;
    }



  
  }
  