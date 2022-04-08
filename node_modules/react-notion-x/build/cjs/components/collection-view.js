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
exports.CollectionView = void 0;
var react_1 = __importDefault(require("react"));
var collection_view_table_1 = require("./collection-view-table");
var collection_view_gallery_1 = require("./collection-view-gallery");
var collection_view_list_1 = require("./collection-view-list");
var collection_view_board_1 = require("./collection-view-board");
var CollectionView = function (props) {
    var collectionView = props.collectionView;
    switch (collectionView.type) {
        case 'table':
            return react_1["default"].createElement(collection_view_table_1.CollectionViewTable, __assign({}, props));
        case 'gallery':
            return react_1["default"].createElement(collection_view_gallery_1.CollectionViewGallery, __assign({}, props));
        case 'list':
            return react_1["default"].createElement(collection_view_list_1.CollectionViewList, __assign({}, props));
        case 'board':
            return react_1["default"].createElement(collection_view_board_1.CollectionViewBoard, __assign({}, props));
        default:
            console.warn('unsupported collection view', collectionView);
            return null;
    }
};
exports.CollectionView = CollectionView;
//# sourceMappingURL=collection-view.js.map