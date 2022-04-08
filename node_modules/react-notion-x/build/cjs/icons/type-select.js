"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
function SvgTypeSelect(props) {
    return (react_1["default"].createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        react_1["default"].createElement("path", { d: 'M7 13A6 6 0 107 1a6 6 0 000 12zM3.751 5.323A.2.2 0 013.909 5h6.182a.2.2 0 01.158.323L7.158 9.297a.2.2 0 01-.316 0L3.751 5.323z' })));
}
exports["default"] = SvgTypeSelect;
//# sourceMappingURL=type-select.js.map