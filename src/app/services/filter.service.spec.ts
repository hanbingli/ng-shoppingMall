import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilterService } from './filter.service';

import { AppModule } from 'src/app/app.module';

describe('FilterService', () => {
  let service: FilterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule, HttpClientTestingModule],
    });
    service = TestBed.inject(FilterService);
   
   
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () =>{

    it('should be empty string as search query by default', (done: DoneFn) => {
      service.searchQuery$.subscribe(
        defaultSQuery =>{
          expect(defaultSQuery).toBe('');
          done();
        })
    });


  })


  describe('selectCat', () =>{

    it('should be empty string as selected by default', (done: DoneFn) => {
      service.selectedCat$.subscribe(
        defaultCat =>{
          expect(defaultCat).toBe('');
          done();
        })
    });


  })








});
