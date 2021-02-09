import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ItemsService } from '../../services/items.service';
import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private itemsSub: Subscription;

  loadedItems: Item[];
  loadedCat: string[];

  constructor(
    private itemsService: ItemsService,
    ) { }

    ngOnInit(){
      // this.loadedItems= this.itemsService.getItems()
      
      this.loadedCat = this.itemsService.getCat()
  
  
      this.itemsSub = this.itemsService.getItems().subscribe(
        res=> {
          this.loadedItems=res;
          console.log(this.loadedItems)
  
        }
      )
    }
      
  
  }
  