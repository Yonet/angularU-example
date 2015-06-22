/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({
	selector: 'viz-app' //Defines the viz-app tag
})
@View({
	template: `
	<h1>{{name}} example</h1>
	<p>Values:</p>
	<ul>
		<li *for="#value of values">
			{{value}}
		</li>
	</ul>
	<input #num (keyup)="doneTyping($event)">
	<button (click)="addData(num.value)">Add</button>
	`,
	directives: [For]
})

class AppComponent {
	name: string;
	values
	constructor() {
		this.name = 'Angular 2 + D3';
		this.values = [10, 49, 29, 69, 37];
		
	}

	addData (num: number) {
		this.values.push(num);
	}

	doneTyping($event) {
		if ($event.which === 13) {
			this.addData($event.target.value);
			$event.target.value = "";
		}
	}
}

// class DataService {
// 	constructor() {
// 		this.values = [10, 49, 29, 69, 37];
// 	}
// }

bootstrap(AppComponent); 