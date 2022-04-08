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
function SvgTypeCheckbox(props) {
    return (react_1["default"].createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        react_1["default"].createElement("path", { d: 'M0 3a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm3-1.5A1.5 1.5 0 001.5 3v8A1.5 1.5 0 003 12.5h8a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0011 1.5H3zm-.167 5.316l.566-.542.177-.17.347-.332.346.334.176.17 1.139 1.098 3.699-3.563.177-.17.347-.335.347.334.177.17.563.543.177.171.372.36-.372.36-.177.17-4.786 4.615-.177.171-.347.334-.347-.334-.177-.17-2.23-2.15-.177-.172-.375-.361.376-.36.179-.17z' })));
}
exports["default"] = SvgTypeCheckbox;
//# sourceMappingURL=type-checkbox.js.map