import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCollection'
})
export class PipeCollectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '$'+value;
  }

}
