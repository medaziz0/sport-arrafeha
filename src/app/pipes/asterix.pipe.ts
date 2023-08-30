import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string): any {
    var voy = ["a", "e", "i", "o", "u", "y","A","E","I","O","U","Y"];
    var ch1 = "", x = "";
    for (let i = 0; i < ch.length; i++) {
      x = ch[i];
      for (let j = 0; j < voy.length; j++) {
        if (ch[i] == voy[j]) {
          x = "*";
          break;
        }
      }
      ch1 = ch1 + x;
    }
    return (ch1);
  }

}
