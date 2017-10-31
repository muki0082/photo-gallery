import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageSearch' })
export class ImageSearchPipe implements PipeTransform {
    transform(items: any[], criteria: string): any{
        if (criteria == 'all') { return items } else 
            return items.filter(item => {
                //return item.caption == criteria;
                return item.caption.toLowerCase().includes(criteria.toLowerCase());
            })
    }
}