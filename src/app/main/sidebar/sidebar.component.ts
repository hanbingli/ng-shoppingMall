import { Component, OnInit, OnChanges } from '@angular/core';

import { ItemsService } from '../../services/items.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public readonly filteredItems$ = this.itemsService.filteredItems$;

  public sortingField$: string = '';
  public sortingOption$: string = '';
  public loadedCatagories: string[];

  constructor(
    private itemsService: ItemsService,
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.loadedCatagories = this.itemsService.getCatagories()
    this.itemsService.getItems()
  }

  onSelectCatagory(selectedCatagory) {
    this.filterService.setCatagory('');
    this.filterService.setCatagory(selectedCatagory);
    console.log('catagorySelected:' + selectedCatagory)
  }

  onChangeSorting({ value }: { value: string }) {
    this.sortingField$ = 'price';
    this.sortingOption$ = value;
  }

  onClear() {
    this.filterService.clearAll()
  }

}
