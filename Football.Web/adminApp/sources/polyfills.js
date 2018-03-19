"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es6");
require("core-js/es7/reflect");
require("core-js/es6/symbol");
require("core-js/es6/object");
require("core-js/es6/function");
require("core-js/es6/parse-int");
require("core-js/es6/parse-float");
require("core-js/es6/number");
require("core-js/es6/math");
require("core-js/es6/string");
require("core-js/es6/date");
require("core-js/es6/array");
require("core-js/es6/regexp");
require("core-js/es6/map");
require("core-js/es6/set");
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
require("classlist.js"); // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
require("web-animations-js"); // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
require("core-js/es6/reflect");
require("core-js/es7/reflect");
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
require("intl"); // Run `npm install --save intl`.
require("intl/locale-data/jsonp/en");
require("core-js/es7/array");
require("core-js/es7/object");
if (typeof SVGElement.prototype.contains === 'undefined') {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}
//# sourceMappingURL=polyfills.js.map