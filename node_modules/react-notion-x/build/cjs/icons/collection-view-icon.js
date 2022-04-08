"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CollectionViewIcon = void 0;
var collection_view_table_1 = __importDefault(require("./collection-view-table"));
var collection_view_board_1 = __importDefault(require("./collection-view-board"));
var collection_view_gallery_1 = __importDefault(require("./collection-view-gallery"));
var collection_view_list_1 = __importDefault(require("./collection-view-list"));
var collection_view_calendar_1 = __importDefault(require("./collection-view-calendar"));
var iconMap = {
    table: collection_view_table_1["default"],
    board: collection_view_board_1["default"],
    gallery: collection_view_gallery_1["default"],
    list: collection_view_list_1["default"],
    calendar: collection_view_calendar_1["default"]
};
var CollectionViewIcon = function (_a) {
    var type = _a.type, rest = __rest(_a, ["type"]);
    var icon = iconMap[type];
    if (!icon) {
        return null;
    }
    return icon(rest);
};
exports.CollectionViewIcon = CollectionViewIcon;
//# sourceMappingURL=collection-view-icon.js.map