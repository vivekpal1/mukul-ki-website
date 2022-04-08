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
export var LoadingIcon = function (props) {
    var className = props.className, rest = __rest(props, ["className"]);
    return (React.createElement("svg", __assign({ className: cs('notion-icon', className) }, rest, { viewBox: '0 0 24 24' }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { x1: '28.1542969%', y1: '63.7402344%', x2: '74.6289062%', y2: '17.7832031%', id: 'linearGradient-1' },
                React.createElement("stop", { stopColor: 'rgba(164, 164, 164, 1)', offset: '0%' }),
                React.createElement("stop", { stopColor: 'rgba(164, 164, 164, 0)', stopOpacity: '0', offset: '100%' }))),
        React.createElement("g", { id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none' },
            React.createElement("g", { transform: 'translate(-236.000000, -286.000000)' },
                React.createElement("g", { transform: 'translate(238.000000, 286.000000)' },
                    React.createElement("circle", { id: 'Oval-2', stroke: 'url(#linearGradient-1)', strokeWidth: '4', cx: '10', cy: '12', r: '10' }),
                    React.createElement("path", { d: 'M10,2 C4.4771525,2 0,6.4771525 0,12', id: 'Oval-2', stroke: 'rgba(164, 164, 164, 1)', strokeWidth: '4' }),
                    React.createElement("rect", { id: 'Rectangle-1', fill: 'rgba(164, 164, 164, 1)', x: '8', y: '0', width: '4', height: '4', rx: '8' }))))));
};
//# sourceMappingURL=loading-icon.js.map