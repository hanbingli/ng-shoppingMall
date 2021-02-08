import { Component, OnInit, OnDestroy } from '@angular/core';
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

  isAuthenticated = false;
  private userSub: Subscription;
  private cartSub: Subscription;
  public cartItemCount: number;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private itemsService: ItemsService,
    ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      
    });
    this.cartSub= this.itemsService.itemCount$.subscribe(itemCount =>{
      this.cartItemCount= itemCount;
      console.log(this.cartItemCount)
    })

  }

  onNewItem(){
    this.router.navigate([
      '/items/new'
    ])


  }

  onSearch(input){


  }







  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
