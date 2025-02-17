import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
	name: 'toChecked'
})
export class CheckPipe implements PipeTransform {
	transform(checked: boolean): any {
		let result: string = checked ? '<i class="material-icons">adb</i>' : '';
		return result;
	}
}
