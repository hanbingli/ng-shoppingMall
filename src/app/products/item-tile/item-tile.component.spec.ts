import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemTileComponent } from './item-tile.component';

describe('ItemTileComponent', () => {
  let comp: ItemTileComponent;
  let fixture: ComponentFixture<ItemTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTileComponent ],
      imports: [
        AppModule, 
      ], 

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTileComponent);
    comp = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });





  
});
