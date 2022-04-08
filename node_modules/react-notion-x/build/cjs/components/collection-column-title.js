"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CollectionColumnTitle = void 0;
var react_1 = __importDefault(require("react"));
var property_icon_1 = require("../icons/property-icon");
var CollectionColumnTitle = function (_a) {
    var schema = _a.schema;
    return (react_1["default"].createElement("div", { className: 'notion-collection-column-title' },
        react_1["default"].createElement(property_icon_1.PropertyIcon, { className: 'notion-collection-column-title-icon', type: schema.type }),
        react_1["default"].createElement("div", { className: 'notion-collection-column-title-body' }, schema.name)));
};
exports.CollectionColumnTitle = CollectionColumnTitle;
//# sourceMappingURL=collection-column-title.js.map