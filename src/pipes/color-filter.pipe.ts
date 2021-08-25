import { Pipe, PipeTransform } from '@angular/core';
import { Color } from 'src/app/models/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterText: string ): Color[] {
    return filterText?value.filter((c:Color)=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
