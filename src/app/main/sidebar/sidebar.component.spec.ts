
import {TestBed, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { Item } from 'src/app/models/item.model';

import { SidebarComponent } from './sidebar.component';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ItemsService } from 'src/app/services/items.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let el : DebugElement;
  let itemsService: any; //will point to jasmine spy?????????
  let testItem:any;
  let getItemsSpy:any;


  beforeEach(async () => {
    testItem = 'test Item';

    const itemsServiceSpy = jasmine.createSpyObj('ItemsService', ["getItems", "getCat", "setCat"]); //重建mock版本的service和使用的method
    // getItemsSpy = itemsServiceSpy.getItems.and.returnValue( testItem );


    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        AppModule, 
        NoopAnimationsModule
      ], 
      providers: [
        {provide: ItemsService , useValue: itemsServiceSpy}
           
      ]
    })
    .compileComponents()
    .then(() =>{
      fixture = TestBed.createComponent(SidebarComponent);
      component = fixture.componentInstance;
      // fixture.detectChanges();
      el =fixture.debugElement;
      itemsService= TestBed.inject(ItemsService);
    })
  
   
  });

  it('should create sidebar Component', () => {
    expect(component).toBeTruthy();
  });

  it('On init cats should be loaded', fakeAsync(() => {
    const mockCats: string[]=[
      'food', 
      'drink',
      'electronics',
      'health',
    ]
    itemsService.getCat.and.returnValue(mockCats);
    expect(itemsService.getCat()).toBe(mockCats, "itemsService returned cat")
  }));
  
  it('should call getItems once',  () => {
    component.ngOnInit();
    expect(itemsService.getItems()).toHaveBeenCalled()//?????????????
  })








});







  // it('should display all tabs', () => {
  //   pending()

    // component.loadedCat = itemsService.getCat.and.returnValue();
    // // fixture.detectChanges()
    // // console.log(el.nativeElement.outerHTML);
    // const cats = el.queryAll(By.css(".cat"));
    // expect (cats).toBeTruthy("could not load cats")
    // expect(cats.length).toBe(4, "Tab number not correct");


    // component.loadedCat = itemsServiceSpy.getCat();

    // fixture.detectChanges()
    // console.log(el.nativeElement.outerHTML);
    // const cats = el.queryAll(By.css(".cat"));
    // expect(cats).toBeTruthy();
    // expect (cats).toBeTruthy("could not load cards")
    
  // });



  // it('should display only selected tab when tab clicked', () => {
  //   pending()
 
    
  // });


  // it('should display only searched items when search issued', () => {
  //   pending()
 
    
  // });











  // it('should get items loaded', async() => {

  //    component.loadedItems$
    // fixture.detectChanges()
    // console.log(el.nativeElement.outerHTML);
    // const cards = el.queryAll(By.css(".item-tile"));
    // expect (cards).toBeTruthy("could not load cards")

   
  // });

  // it('should get catagories loaded', () => {
   
  // });


  // it('should display the first tile', async() => {

  //    component.loadedItems$
    // fixture.detectChanges()

    // const card = el.query(By.css(".item-tile::first-child")), 
    // title=card.query(By.css("mat-card-title")
    // expect (title).toBeTruthy("could not load card title")


   
  // });



// });
