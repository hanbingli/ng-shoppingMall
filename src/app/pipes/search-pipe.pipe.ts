import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0 || filterString === ''){
      return value;
    }else{
      for (const item of value){
        const resultArray =[];
        if (item.name.toLowerCase().includes(filterString.toLowerCase())){
          resultArray.push(item)
        }
        return resultArray;
  
      }

    }
   
  }

}
