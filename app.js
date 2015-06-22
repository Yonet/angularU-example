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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2 + D3';
        this.values = [10, 49, 29, 69, 37];
    }
    AppComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.values.push($event.target.value);
            $event.target.value = "";
        }
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'viz-app' //Defines the viz-app tag
        }),
        angular2_1.View({
            template: "\n\t<h1>{{name}} example</h1>\n\t<p>Values:</p>\n\t<ul>\n\t\t<li *for=\"#value of values\">\n\t\t\t{{value}}\n\t\t</li>\n\t</ul>\n\t<input #num (keyup)=\"doneTyping($event)\">\n\t",
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
