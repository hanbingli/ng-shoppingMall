import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0){
      return value;
    }
    for (const item of value){
      const resultArray =[];
      if (item.name === filterString){
        resultArray.push(item)
      }
      return resultArray;

    }
  }

}
