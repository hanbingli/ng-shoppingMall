import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, filterString: string,  propName): any {
    const resultArray =[];

    if(value.length === 0 || filterString === '' || propName === ''){
      return value;
    }else{
      for (const item of value){
        
        if (item[propName].toLowerCase().includes(filterString.toLowerCase())){
          resultArray.push(item)
        }
       
  
      }
      return resultArray;
    }
   
  }

}
