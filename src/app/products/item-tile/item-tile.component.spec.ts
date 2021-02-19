import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { DebugElement} from '@angular/core';

import { AppModule } from 'src/app/app.module';
import { ItemTileComponent } from './item-tile.component';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';


const testInput: Item= 
{     id:0,
      name: 'banana',
      catagory: 'food', 
      description: 'banana', 
      imagePath: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', 
      price: 1.99
      
    }

describe('ItemTileComponent', () => {
  let component: ItemTileComponent;
  let fixture: ComponentFixture<ItemTileComponent>;
  let debugElement: DebugElement;
  let itemsService: any;

  const itemsServiceSpy = jasmine.createSpyObj('ItemsService', [
    "addToCart", 
]);

  const componentUiElements = {
    getTitle: () => fixture.debugElement.query(By.css('mat-card-title')),
    getPrice: () => fixture.debugElement.query(By.css('.item-price')),
    getAddButton: () => fixture.debugElement.query(By.css('button')),
  
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTileComponent ],
      providers: [{ provide: ItemsService, useValue: itemsServiceSpy }],
      imports: [
        AppModule, 
      ], 

    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTileComponent);
    component = fixture.componentInstance;
    component.item = testInput;
    itemsService = TestBed.inject(ItemsService);
    fixture.detectChanges();

  });

  // beforeEach(() => {
   
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render title from input', () => {
    const tileTitle = componentUiElements.getTitle()
    expect(tileTitle.nativeElement.textContent).toBe('banana')

  });


  it('should render title from input', () => {
    const tilePrice = componentUiElements.getPrice()
    expect(tilePrice.nativeElement.textContent).toBe('1.99')

  });

  it('should trigger addItem method of ItemService when AddToCart button is clicked', () => {
    fixture.detectChanges()
    const addToCartButton = componentUiElements.getAddButton()
    addToCartButton.nativeElement.click()
    // addToCartButton.nativeElement.triggerEventHandler('click', null);
    // Why doesn't work with triggerEventHandler????
    fixture.detectChanges()
    expect(itemsService.addToCart).toHaveBeenCalled()

  });



});
