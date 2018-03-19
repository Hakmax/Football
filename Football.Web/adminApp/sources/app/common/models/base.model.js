"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());
exports.BaseModel = BaseModel;
var ModelWithName = /** @class */ (function (_super) {
    __extends(ModelWithName, _super);
    function ModelWithName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModelWithName;
}(BaseModel));
exports.ModelWithName = ModelWithName;
//# sourceMappingURL=base.model.js.map