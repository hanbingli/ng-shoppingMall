import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../models/item.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // items: Item[];

  constructor(
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {


  }

  onNewItem(){
    this.router.navigate([
      '/items/new'
    ])


  }

}
