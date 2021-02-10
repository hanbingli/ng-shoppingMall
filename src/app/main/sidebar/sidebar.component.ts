import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from '../../services/items.service';
import { FilterService } from '../../services/filter.service';


import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private itemsSub: Subscription;
  private catSub: Subscription;
  private filterSub: Subscription;

  public filterInput: string='';


  loadedItems: Item[];
  loadedCat: string[];

  searchMode:boolean;

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService,
    ) { }

    ngOnInit(){
      this.loadedCat = this.itemsService.getCat()
     
  
      this.itemsSub = this.itemsService.getItems().subscribe(
        res=> {
          this.loadedItems=res;
          console.log(this.loadedItems)
  
        }
      )

      this.filterSub = this.filterService.searchInput$.subscribe(
        res=> {
          this.filterInput = res
         
        }
      )
    }
    

   


    setCat(cat){
      if(cat == ''){
        this.itemsSub = this.itemsService.getItems().subscribe(
          res=> {
            this.loadedItems=res;
            console.log(this.loadedItems)
    
          }
        )
      }else{
        this.loadedItems= this.loadedItems.filter(item =>{ 
          return item.catagory.match(cat)
        })
      }
     
    }
  
  }
  