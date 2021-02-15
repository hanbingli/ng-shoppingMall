import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';


import { Item } from '../models/item.model';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsService: ItemsService; //create an instance of the ItemService
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports:[HttpClientTestingModule],   //产生mock implimentation
      imports:[AppModule, HttpClientTestingModule],
      providers:[
        ItemsService, 
      ]
    });   //
    // itemsService=TestBed.get(ItemsService)
    itemsService= TestBed.inject(ItemsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(itemsService).toBeTruthy();
  });

  // it('should send request', () => {
  //   itemsService.getItems()
  //   const req = httpTestingController.expectOne('https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json');
  //   expect(req.request.method).toEqual("GET");
  //   req.flush({})        //—?????????????????????????????????????????????????????????????????????????????
  // })

  // it('should get all items', () => {
  //   itemsService.loadedItems$.subscribe(
  //     items =>{
  //       expect(items).toBeTruthy('No items returned');
  //       expect(items.length).toBe(9)   //——————————————————————————————————————————————————————————

  //     } )
  
  // });






});
