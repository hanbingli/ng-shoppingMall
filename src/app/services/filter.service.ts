import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilterService {



  private readonly searchQuery$$ = new BehaviorSubject<string>('');
  public readonly searchQuery$: Observable<string> = this.searchQuery$$.asObservable();

  private readonly searchField$$ = new BehaviorSubject<string>('');
  public readonly searchField$: Observable<string> = this.searchField$$.asObservable();

  private readonly selectedCat$$ = new BehaviorSubject<string>('');
  public readonly selectedCat$: Observable<string> = this.selectedCat$$.asObservable();

  private readonly sortingField$$ = new BehaviorSubject<string>('');
  public readonly sortingField$: Observable<string> = this.sortingField$$.asObservable();

  private readonly sortingOption$$ = new BehaviorSubject<string>('');
  public readonly sortingOption$: Observable<string> = this.sortingOption$$.asObservable();


  // public readonly hasSearchText$: Observable<boolean> = this.searchQuery$$.pipe(
  //   map(query => query !== null && query.length > 0),
  // );

  constructor() { }

  // setCat(cat:string){

  //   this.searchQuery$$.next(cat)
  //   this.searchField$$.next('catagory')

  // }


  setCat(cat:string){
    
    this.selectedCat$$.next(cat);
    console.log(this.selectedCat$);
    // this.clearCat()
  }
 

  setSearch(searchInput:string){
    if(searchInput.length ===0) {
    searchInput = searchInput;
    }else{
      this.searchQuery$$.next(searchInput)
    }
  
    // this.searchField$$.next('name')

  }

  setSorting(sortingInput:string){
    this.sortingField$$.next('price')
    this.sortingOption$$.next(sortingInput)
  }

  clearCat(){
    this.selectedCat$$.next('')
  }

  onClear(){
    this.selectedCat$$.next('')
    this.searchQuery$$.next('')
  }




}
