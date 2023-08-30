import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(T:any,term:string): any {
    if (term === undefined) {
      return T;
      }
      return T.filter((obj)=> {
      return (
      obj.teamOne.toLowerCase().includes(term.toLowerCase())
      || obj.teamTwo.toLowerCase().includes(term.toLowerCase()));
      })
      }
  }


