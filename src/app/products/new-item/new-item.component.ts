import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';


import { Item } from '../../models/item.model'
import { ItemsService } from '../../services/items.service'


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm: FormGroup;
  catagories: string[]=[
    'food', 
    'drinks',
    'electronics',
    'health',

  ]

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private router: Router
     ) { }

  ngOnInit(): void {
    this.newItemForm = new FormGroup({
      'name': new FormControl(null), 
      'catagory': new FormControl(null), 
      'price': new FormControl(null), 
      'desc': new FormControl(null), 
      'imagePath':new FormControl(null), 
    })

  }
  onAddItem(){
     console.log(this.newItemForm)
     this.itemsService.addItem(this.newItemForm.value);
     console.log(this.itemsService.getItems());
     this.onCancel();

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  
}
