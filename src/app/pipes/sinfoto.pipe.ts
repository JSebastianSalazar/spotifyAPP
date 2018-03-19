import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(images: any[]): any {
    const NOIMAGES =  'assets/img/noimage.png';
    if (!images) {
      return NOIMAGES;
    }
    return (images.length > 0  ) ? images[1].url : NOIMAGES;
  }

}
