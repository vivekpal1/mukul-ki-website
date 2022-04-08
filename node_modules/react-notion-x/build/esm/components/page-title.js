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
import { Text } from './text';
import { PageIcon } from './page-icon';
export var PageTitle = function (_a) {
    var _b, _c, _d;
    var block = _a.block, className = _a.className, defaultIcon = _a.defaultIcon, rest = __rest(_a, ["block", "className", "defaultIcon"]);
    var recordMap = useNotionContext().recordMap;
    if (!block)
        return null;
    // TODO: replace with getBlockTitle
    if (block.type === 'collection_view_page' ||
        block.type === 'collection_view') {
        var collection = (_b = recordMap.collection[block.collection_id]) === null || _b === void 0 ? void 0 : _b.value;
        if (collection) {
            block.properties = __assign(__assign({}, block.properties), { title: collection.name });
            block.format = __assign(__assign({}, block.format), { page_icon: collection.icon });
        }
    }
    if (!((_c = block.properties) === null || _c === void 0 ? void 0 : _c.title)) {
        return null;
    }
    return (React.createElement("span", __assign({ className: cs('notion-page-title', className) }, rest),
        React.createElement(PageIcon, { block: block, defaultIcon: defaultIcon, className: 'notion-page-title-icon' }),
        React.createElement("span", { className: 'notion-page-title-text' },
            React.createElement(Text, { value: (_d = block.properties) === null || _d === void 0 ? void 0 : _d.title, block: block }))));
};
//# sourceMappingURL=page-title.js.map