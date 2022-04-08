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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { cs } from '../utils';
import { useNotionContext } from '../context';
var katexSettings = {
    throwOnError: false,
    strict: false
};
export var Equation = function (_a) {
    var math = _a.math, className = _a.className, rest = __rest(_a, ["math", "className"]);
    var components = useNotionContext().components;
    return (React.createElement("span", { role: 'button', tabIndex: 0, className: cs('notion-equation', rest.block ? 'notion-equation-block' : 'notion-equation-inline', className) },
        React.createElement(components.equation, __assign({ math: math, settings: katexSettings }, rest))));
};
//# sourceMappingURL=equation.js.map