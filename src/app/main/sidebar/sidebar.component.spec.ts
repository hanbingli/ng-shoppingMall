import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  const itemsServiceSpy = jasmine.createSpyObj('ItemsService', ["getItems", "getCat"]);
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get items loaded', () => {
   
  });

  it('should get catagories loaded', () => {
   
  });




});
