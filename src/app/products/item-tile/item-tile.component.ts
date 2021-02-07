import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from '../../services/items.service';
import {Input} from "@angular/core";

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
  @Input('item') item: Item;
  constructor(
   
    ) { }

  ngOnInit(): void {
   
  }


  

}
