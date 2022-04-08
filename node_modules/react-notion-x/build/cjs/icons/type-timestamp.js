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
function SvgTypeTimestamp(props) {
    return (react_1["default"].createElement("svg", __assign({ viewBox: '0 0 14 14' }, props),
        react_1["default"].createElement("path", { d: 'M6.986 14c-1.79 0-3.582-.69-4.944-2.068-2.723-2.72-2.723-7.172 0-9.892 2.725-2.72 7.182-2.72 9.906 0A6.972 6.972 0 0114 6.996c0 1.88-.728 3.633-2.052 4.955A7.058 7.058 0 016.986 14zm3.285-6.99v1.645H5.526v-5.47h1.841v3.63h2.904v.194zm1.89-.014c0-1.379-.542-2.67-1.522-3.648-2.006-2.005-5.287-2.007-7.297-.009l-.009.009a5.168 5.168 0 000 7.295c2.01 2.007 5.297 2.007 7.306 0a5.119 5.119 0 001.521-3.647z' })));
}
exports["default"] = SvgTypeTimestamp;
//# sourceMappingURL=type-timestamp.js.map