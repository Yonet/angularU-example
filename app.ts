/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'viz-app' // Defines the <my-app></my-app> tag
	
})
@View({
	template: '<h1>{{name}} example</h1>' // Defines the inline template for the component
})

class AppComponent {
	name: string;
	constructor() {
		this.name = 'Angular 2 + D3';
	}
}



bootstrap(AppComponent); 