if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular = require('angular2/angular2');
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var d3 = require('d3');
var BarGraph = (function () {
    function BarGraph(elementRef, width, height) {
        var el = elementRef.domElement;
        var graph = d3.select(el);
        this.divs = graph.append('div')
            .attr({
            'class': 'chart',
            'width': width + 'px',
            'height': height + 'px'
        })
            .selectAll('div');
    }
    BarGraph.prototype.render = function (newVal) {
        this.divs.data(newVal)
            .enter().append('div')
            .transition().ease('elastic')
            .style('width', function (d) { return d + '%'; })
            .text(function (d) { return d + '%'; });
    };
    BarGraph.prototype.onChange = function (changes) {
        this.render(changes.data.currentValue);
    };
    BarGraph = __decorate([
        angular2_1.Directive({
            selector: 'bar-graph',
            lifecycle: [angular2_1.onChange],
            properties: ['data']
        }),
        __param(0, di_1.Inject(angular2_1.ElementRef)),
        __param(1, angular2_1.Attribute('width')),
        __param(2, angular2_1.Attribute('height')), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, String, String])
    ], BarGraph);
    return BarGraph;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2 + D3';
        this.values = [10, 20, 30, 40, 60];
    }
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.values.push($event.target.value);
            $event.target.value = "";
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'viz-app'
        }),
        angular2_1.View({
            directives: [BarGraph],
            template: "\n  \t<h1>{{name}} example</h1>\n\t<p>Values:</p>\n\t<ul>\n\t\t<li *for=\"#value of graphData\">\n\t\t\t{{value}}\n\t\t</li>\n\t</ul>\n\t<input #num (keyup)=\"doneTyping($event)\">\n\t<bar-graph bind-data=\"values\" width=\"1200\" height=\"500\"></bar-graph>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular.bootstrap(AppComponent);
// @Directive({
// 	selector: 'bar-graph',
// 	lifecycle: [onChange],
// 	properties: ['data']
// })
// class BarGraph {
// 	data: Array<number>;
// 	divs: any;
// 	constructor(
// 		@Inject(ElementRef) elementRef: ElementRef,
// 		@Attribute('width') width: string,
// 		@Attribute('height') height: string) {
// 		var el: any = elementRef.domElement;
// 		var graph: any = d3.select(el);
// 		this.divs = graph.
// 			append('div').
// 			attr({
// 				'class': 'chart'
// 			}).
// 			style({
// 				'width': width + 'px',
// 				'height': height + 'px',
// 			}).
// 			selectAll('div');
// 	}
// 	render(newValue) {
// 		if (!newValue) return;
// 		this.divs.data(newValue).enter().append('div')
// 			.transition().ease('elastic')
// 			.style('width', d => d + '%')
// 			.text(d => d + '%');
// 	}
// 	onChange(changes: 'data') {
// 		this.render(changes.data.currentValue);
// 	}
// }
