import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string): any {
   let result: string = "";
    for (let i =  ch.length-1;i >=0; i--) {
      result = result + ch[i]
      
    }
  return result;
  }

}
