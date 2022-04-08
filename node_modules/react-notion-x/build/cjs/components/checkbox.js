"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var check_1 = __importDefault(require("../icons/check"));
var Checkbox = function (_a) {
    var isChecked = _a.isChecked;
    var content = null;
    if (isChecked) {
        content = (react_1["default"].createElement("div", { className: 'notion-property-checkbox-checked' },
            react_1["default"].createElement(check_1["default"], null)));
    }
    else {
        content = react_1["default"].createElement("div", { className: 'notion-property-checkbox-unchecked' });
    }
    return (react_1["default"].createElement("span", { className: 'notion-property notion-property-checkbox' }, content));
};
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map