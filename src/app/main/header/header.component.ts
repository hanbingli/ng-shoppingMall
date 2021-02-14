import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item.model';


import { AuthService } from '../../auth/auth.service';
import { ItemsService } from '../../services/items.service';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  isAuthenticated = false;
  private userSub: Subscription;
  private cartSub: Subscription;

  public cartItemCount: number;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private itemsService: ItemsService,
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;

    });

    this.cartSub = this.itemsService.itemCount$.subscribe(itemCount => {
      this.cartItemCount = itemCount;
    });


  }

  onReset() {
    this.ngOnInit()

  }



  onNewItem() {
    this.router.navigate([
      '/items/new'
    ])


  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value.length === 0) {

      this.clearInput();

    } else {

      this.filterService.setSearch(value);
      console.log(value)
      // this.clearInput()
    }
  }

  clearInput() {
    this.searchInput.nativeElement.value = '';
    this.filterService.setSearch('');
  }


  onClear(){
    this.filterService.onClear()
  }


}
