import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';


import { Item } from '../models/item.model';

import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let itemsService: ItemsService; //create an instance of the ItemService
  let httpTestingController: HttpTestingController;

  const mockReq = (mockData: any) => {
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: 'https://ng-shoppingmall-default-rtdb.firebaseio.com/items.json',
    });

    req.flush(mockData);
  };

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


  
// describe('products', () => {
//    it('should get all items', (done: DoneFn) => {
//     itemsService.loadedItems$.subscribe(
//       items =>{
//         expect(items).toBeTruthy('No items returned');
//         expect(items.length).toBe(9)   //——————————————————————————————————————————————————————————

//       } )
  
//   });

// })

 






});
