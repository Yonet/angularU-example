/// <reference path="typings/angular2/angular2.d.ts" />
import * as angular from 'angular2/angular2';
import {Component, Directive, View, Attribute, bootstrap, For, onChange, ElementRef} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import * as d3 from 'd3';


@Directive({
	selector: 'bar-graph',
	lifecycle: [onChange],
	properties: ['data']
})
class BarGraph {
	data: Array<number>;
	divs: any;
	constructor(
		@Inject(ElementRef) elementRef: ElementRef,
		@Attribute('width') width: string,
		@Attribute('height') height: string) {

		var el: any = elementRef.domElement;
		var graph: any = d3.select(el);

		this.divs = graph.
			append('div').
			attr({
				'class': 'chart'
			}).
			style({
				'width': width + 'px',
				'height': height + 'px',
			}).
			selectAll('div');
	}

	render(newValue) {
		if (!newValue) return;

		this.divs.data(newValue).enter().append('div')
			.transition().ease('elastic')
			.style('width', d => d + '%')
			.text(d => d + '%');

	}

	onChange(updated) {
		console.log('data changed', updated.data);
		this.data = updated.data.currentValue;
		this.render(this.data);
	}
}

@Component({
	selector: 'viz-app'
})
@View({
	directives: [BarGraph],
	template: `
  	<h1>{{name}} example</h1>
	<p>Values:</p>
	<ul>
		<li *for="#value of graphData">
			{{value}}
		</li>
	</ul>
	<input #num (keyup)="doneTyping($event)">
	<bar-graph bind-data="values" width="1200" height="500"></bar-graph>

  `
})
class AppComponent {
	values: Array<number>;
	constructor() {
		this.name = 'Angular 2 + D3';
		this.values = [10, 20, 30, 40, 60];
	}

	doneTyping($event) {
		if ($event.which === 13) {
			this.values.push($event.target.value);
			$event.target.value = "";
		}
	}

}

angular.bootstrap(AppComponent);
