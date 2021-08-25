import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterText: string ): Brand[] {
    return filterText?value.filter((b:Brand)=>b.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
