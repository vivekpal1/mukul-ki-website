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
exports.CollectionRow = void 0;
var react_1 = __importDefault(require("react"));
var collection_column_title_1 = require("./collection-column-title");
var property_1 = require("./property");
var context_1 = require("../context");
var CollectionRow = function (_a) {
    var _b, _c, _d, _e;
    var block = _a.block;
    var recordMap = (0, context_1.useNotionContext)().recordMap;
    var collectionId = block.parent_id;
    var collection = (_b = recordMap.collection[collectionId]) === null || _b === void 0 ? void 0 : _b.value;
    var schemas = collection === null || collection === void 0 ? void 0 : collection.schema;
    if (!collection || !schemas) {
        return null;
    }
    var propertyIds = Object.keys(schemas).filter(function (id) { return id !== 'title'; });
    // filter properties based on visibility
    if ((_c = collection.format) === null || _c === void 0 ? void 0 : _c.property_visibility) {
        propertyIds = propertyIds.filter(function (id) {
            var _a;
            return ((_a = collection.format.property_visibility.find(function (_a) {
                var property = _a.property;
                return property === id;
            })) === null || _a === void 0 ? void 0 : _a.visibility) !== 'hide';
        });
    }
    // sort properties
    if ((_d = collection.format) === null || _d === void 0 ? void 0 : _d.collection_page_properties) {
        // sort properties based on collection page order
        var idToIndex_1 = (_e = collection.format) === null || _e === void 0 ? void 0 : _e.collection_page_properties.reduce(function (acc, p, i) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[p.property] = i, _a)));
        }, {});
        propertyIds.sort(function (a, b) { return idToIndex_1[a] - idToIndex_1[b]; });
    }
    else {
        // default to sorting properties alphabetically based on name
        propertyIds.sort(function (a, b) { return schemas[a].name.localeCompare(schemas[b].name); });
    }
    return (react_1["default"].createElement("div", { className: 'notion-collection-row' },
        react_1["default"].createElement("div", { className: 'notion-collection-row-body' }, propertyIds.map(function (id) {
            var _a;
            var schema = schemas[id];
            return (react_1["default"].createElement("div", { className: 'notion-collection-row-property', key: id },
                react_1["default"].createElement(collection_column_title_1.CollectionColumnTitle, { schema: schema }),
                react_1["default"].createElement("div", { className: 'notion-collection-row-value' },
                    react_1["default"].createElement(property_1.Property, { schema: schema, data: (_a = block.properties) === null || _a === void 0 ? void 0 : _a[id], block: block, collection: collection }))));
        }))));
};
exports.CollectionRow = CollectionRow;
//# sourceMappingURL=collection-row.js.map