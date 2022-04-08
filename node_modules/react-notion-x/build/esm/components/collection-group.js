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
import { Property } from './property';
export var CollectionGroup = function (_a) {
    var CollectionViewComponent = _a.collectionViewComponent, collection = _a.collection, collectionGroup = _a.collectionGroup, schema = _a.schema, value = _a.value, hidden = _a.hidden, summaryProps = _a.summaryProps, detailsProps = _a.detailsProps, rest = __rest(_a, ["collectionViewComponent", "collection", "collectionGroup", "schema", "value", "hidden", "summaryProps", "detailsProps"]);
    if (hidden)
        return null;
    return (React.createElement("details", __assign({ open: true, className: 'notion-collection-group' }, detailsProps),
        React.createElement("summary", __assign({ className: 'notion-collection-group-title' }, summaryProps),
            React.createElement("div", null,
                React.createElement(Property, { schema: schema, data: [[value]], collection: collection }),
                React.createElement("span", { className: 'notion-board-th-count' }, collectionGroup === null || collectionGroup === void 0 ? void 0 : collectionGroup.total))),
        React.createElement(CollectionViewComponent, __assign({ collection: collection, collectionGroup: collectionGroup }, rest))));
};
//# sourceMappingURL=collection-group.js.map