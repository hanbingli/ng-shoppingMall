import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private readonly searchQuery$$ = new BehaviorSubject<string>('');
  public readonly searchQuery$: Observable<string> = this.searchQuery$$.asObservable();

  private readonly selectedCatagory$$ = new BehaviorSubject<string>('');
  public readonly selectedCatagory$: Observable<string> = this.selectedCatagory$$.asObservable();

  private readonly sortingField$$ = new BehaviorSubject<string>('');
  public readonly sortingField$: Observable<string> = this.sortingField$$.asObservable();

  private readonly sortingOption$$ = new BehaviorSubject<string>('');
  public readonly sortingOption$: Observable<string> = this.sortingOption$$.asObservable();

  constructor() { }

  setCatagory(selectedCatagory: string) {
    this.selectedCatagory$$.next(selectedCatagory);
  }

  setSearch(searchInput: string) {
    this.searchQuery$$.next('')
    if (searchInput.length === 0) {
      searchInput = searchInput;
    } else {
      this.searchQuery$$.next(searchInput)
    }
  }

  setSorting(sortingInput: string) {
    this.sortingField$$.next('price')
    this.sortingOption$$.next(sortingInput)
  }

  clearSearch() {
    this.searchQuery$$.next('')
  }

  clearAll() {
    this.selectedCatagory$$.next('')
    this.searchQuery$$.next('')
  }

}
