import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loadedItems: Item[];
  loadedCat: string[];

  constructor(
    private itemsService: ItemsService,
    ) { }

  ngOnInit(): void {
    this.loadedItems= this.itemsService.getItems()
    this.loadedCat = this.itemsService.getCat()
  }



}
