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
function SvgTypeRelation(props) {
    return (react_1["default"].createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        react_1["default"].createElement("path", { d: 'M4.5 1v2h5.086L1 11.586 2.414 13 11 4.414V9.5h2V1z' })));
}
exports["default"] = SvgTypeRelation;
//# sourceMappingURL=type-relation.js.map