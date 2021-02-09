import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private selectedCat$$:string;
  public selectedCat$: Subject<string> = new Subject<string>();

  private searchInput$$:string; 
  public searchInput$: BehaviorSubject<string> = new BehaviorSubject<string>(null);


  constructor() { }

  setCat(cat){
    this.selectedCat$$= cat;
    console.log(this.selectedCat$$)
    this.selectedCat$.next(this.selectedCat$$)

  }



  // let searchInput$$:string; 
  // searchInput$: Subject<string>= new Subject<string>()

  // setSearch(searchInput){
  //   this.searchInput.next(keyword)

  // }




}
