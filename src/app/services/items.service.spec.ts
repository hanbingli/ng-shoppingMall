import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';


import { Item } from '../models/item.model';

import { ItemsService } from './items.service';
import { FilterService } from './filter.service';



const MockSearchResult: Item[]= [
    {     id:0,
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },
    {     id:4,
      name: 'banana2',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    },

  ]

describe('ItemsService', () => {
  let itemsService: ItemsService; //create an instance of the ItemService
  let filterService: FilterService;
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
    filterService = TestBed.inject(FilterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });



  it('should be created', () => {
    expect(itemsService).toBeTruthy();
  });


  
  describe('products', () => {

    it('should get all items', () => {
      itemsService.fetchItems()
        .subscribe(
        items =>{
          expect(items).toBeTruthy('No items returned');
          expect(items.length).toBe(9)   //——————————————————————————————————————————————————————————

        } )
    
    });

    it('should be created', () => {
      expect(itemsService).toBeTruthy();
    });
    

    it('should filter with search query by title', (done: DoneFn) => {

      pending()
      // const query = 'banana';
      // filterService.setSearch(query);
      // const expectedResult = MockSearchResult;
      // itemsService.filteredItems$.subscribe(searchResult => {
      //   expect(searchResult).toEqual(expectedResult);
      //   done();
      // });

      // mockReq(mockNavigation);
      // httpTestingController.verify();
    });


    it('should filter with search query by tags', (done: DoneFn) => {
      pending()
      // const query = 'retail';
      // service.setSearchQuery(query);
      // const expectedResult = new Map();
      // expectedResult.set('payments-client-api', mockPaymentsApiModule);

      // service.filteredApiModules$.subscribe(searchResult => {
      //   expect(searchResult).toEqual(expectedResult);
      //   done();
      // });

      // mockReq(mockNavigation);
      // httpTestingController.verify();
    });



    




})

 






});
