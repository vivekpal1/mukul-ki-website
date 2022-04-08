"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageIcon = void 0;
var react_1 = __importDefault(require("react"));
var notion_utils_1 = require("notion-utils");
var utils_1 = require("../utils");
var default_page_icon_1 = require("../icons/default-page-icon");
var context_1 = require("../context");
var graceful_image_1 = require("./graceful-image");
var isIconBlock = function (value) {
    return (value.type === 'page' ||
        value.type === 'callout' ||
        value.type === 'collection_view' ||
        value.type === 'collection_view_page');
};
var PageIcon = function (_a) {
    var _b;
    var block = _a.block, className = _a.className, _c = _a.hideDefaultIcon, hideDefaultIcon = _c === void 0 ? false : _c, defaultIcon = _a.defaultIcon;
    var _d = (0, context_1.useNotionContext)(), mapImageUrl = _d.mapImageUrl, recordMap = _d.recordMap;
    if (!isIconBlock(block)) {
        return null;
    }
    var icon = (_b = (0, notion_utils_1.getBlockIcon)(block, recordMap)) !== null && _b !== void 0 ? _b : defaultIcon;
    var title = (0, notion_utils_1.getBlockTitle)(block, recordMap);
    if (icon && (0, utils_1.isUrl)(icon)) {
        var url = mapImageUrl(icon, block);
        return (react_1["default"].createElement(graceful_image_1.GracefulImage, { className: (0, utils_1.cs)(className, 'notion-page-icon'), src: url, alt: title ? title : 'Icon', loading: 'lazy' }));
    }
    else {
        var iconValue = icon === null || icon === void 0 ? void 0 : icon.trim();
        if (!iconValue) {
            if (hideDefaultIcon) {
                return null;
            }
            return (react_1["default"].createElement(default_page_icon_1.DefaultPageIcon, { className: (0, utils_1.cs)(className, 'notion-page-icon'), alt: title ? title : 'Page' }));
        }
        return (react_1["default"].createElement("span", { className: (0, utils_1.cs)(className, 'notion-page-icon'), role: 'img', "aria-label": icon }, iconValue));
    }
};
exports.PageIcon = PageIcon;
//# sourceMappingURL=page-icon.js.map