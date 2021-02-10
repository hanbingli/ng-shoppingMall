import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private selectedCat$$:string;
  public selectedCat$: Subject<string> = new Subject<string>();

  private searchInput$$:string ='';
  public searchInput$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  // setCat(cat){
  //   this.selectedCat$$= cat;
  //   console.log(this.selectedCat$$)
  //   this.selectedCat$.next(this.selectedCat$$)

  // }
 

  setSearch(searchInput:string){
    this.searchInput$$=searchInput;
    this.searchInput$.next(this.searchInput$$)
    console.log(this.searchInput$$)

  }




}
