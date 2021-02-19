import { ElementSchemaRegistry } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';

import { FilterService } from '../../services/filter.service';

import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let filterService: any;
  const filterServiceSpy = jasmine.createSpyObj('FilterService', [
    'setSearch',
    'clearSearch',
    'clearAll',
  ]);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [AppModule],
      providers: [{ provide: FilterService, useValue: filterServiceSpy }],
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    filterService = TestBed.inject(FilterService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should trigger update of searchQuery', () => {
    fixture.detectChanges()
    const input = fixture.debugElement.query(By.css('input'));
    const value = 'trigger input event';
    input.nativeElement.value = value;
    input.triggerEventHandler('keydown.enter', {target: input.nativeElement });
    fixture.detectChanges()
    expect(filterService.setSearch).toHaveBeenCalled()
  });

    it('should hide delete-search button when there is no input', () => {

    const closeButton = fixture.debugElement.query(By.css('.clearSearch'));
    
    expect(closeButton).toBeNull();
  });


 
  it('should show delete-search button when there is no input', () => {
    
   
    const input = fixture.debugElement.query(By.css('input'));
    const value = 'trigger input event';
    input.nativeElement.value = value;
    fixture.detectChanges()
    const closeButton = fixture.debugElement.query(By.css('.clearSearch'));
    expect(closeButton).toBeTruthy();

  });




  it('should trigger clearSearch of searchQuery when close is clicked', () => {
    const input = fixture.debugElement.query(By.css('input'));
    const value = 'trigger input event';
    input.nativeElement.value = value;
    fixture.detectChanges()
    const closeButton = fixture.debugElement.query(By.css('mat-icon')).nativeElement;
    closeButton.click()
    fixture.detectChanges()
    expect(filterService.clearSearch).toHaveBeenCalled()
  });







});


