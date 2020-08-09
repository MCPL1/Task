import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';
import { resultMemoize } from '@ngrx/store';

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    transform(value: string, length: number): any {
        let result;
        if(!value) return value;
        if(value.length < length){
            result = value;
        } else {
            result = value.substring(0, value.lastIndexOf(' ', length)) + '...';
        }
        return result;
    }
}