import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';

@Pipe({
	name: 'formatLocalDate'
})
export class DateFormatPipe implements PipeTransform {

	transform(value: string, optionsType?: string): any {

		if (!value) {
			return '';
		}

		if (String(value).indexOf('[') !== -1) {
			value = value.slice(0, value.indexOf('['));
		}

		const dateValue = new Date(value);
		let options:any = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
		if (optionsType && optionsType == 'format2') {
			let options:any = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }
			const dateWithNoTimezone = dateValue.toLocaleDateString('en-US', options);
			return dateWithNoTimezone;
		}

		if (optionsType && optionsType == 'format3') {
			let options:any = { year: 'numeric', month: 'short', day: 'numeric' };
			const dateWithNoTimezone = dateValue.toLocaleDateString('en-US', options);
			return dateWithNoTimezone;
		}

		const dateWithNoTimezone = dateValue.toLocaleTimeString('en-US', options);
		return dateWithNoTimezone;
	}
}
