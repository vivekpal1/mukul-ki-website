"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.GoogleDrive = void 0;
var react_1 = __importDefault(require("react"));
var date_fns_1 = require("date-fns");
var context_1 = require("../context");
var utils_1 = require("../utils");
var graceful_image_1 = require("./graceful-image");
var GoogleDrive = function (_a) {
    var _b;
    var block = _a.block, className = _a.className;
    var _c = (0, context_1.useNotionContext)(), components = _c.components, mapImageUrl = _c.mapImageUrl;
    var properties = (_b = block.format) === null || _b === void 0 ? void 0 : _b.drive_properties;
    if (!properties)
        return null;
    var domain;
    try {
        var url = new URL(properties.url);
        domain = url.hostname;
    }
    catch (err) {
        // ignore invalid urls for robustness
    }
    return (react_1["default"].createElement("div", { className: (0, utils_1.cs)('notion-google-drive', className) },
        react_1["default"].createElement(components.link, { className: 'notion-google-drive-link', href: properties.url, target: '_blank', rel: 'noopener noreferrer' },
            react_1["default"].createElement("div", { className: 'notion-google-drive-preview' },
                react_1["default"].createElement(graceful_image_1.GracefulImage, { src: mapImageUrl(properties.thumbnail, block), alt: properties.title || 'Google Drive Document', loading: 'lazy' })),
            react_1["default"].createElement("div", { className: 'notion-google-drive-body' },
                properties.title && (react_1["default"].createElement("div", { className: 'notion-google-drive-body-title' }, properties.title)),
                properties.modified_time && (react_1["default"].createElement("div", { className: 'notion-google-drive-body-modified-time' },
                    "Last modified",
                    ' ',
                    properties.user_name ? "by " + properties.user_name + " " : '',
                    (0, date_fns_1.formatDistance)(new Date(properties.modified_time), new Date()),
                    ' ',
                    "ago")),
                properties.icon && domain && (react_1["default"].createElement("div", { className: 'notion-google-drive-body-source' },
                    properties.icon && (react_1["default"].createElement("div", { className: 'notion-google-drive-body-source-icon', style: {
                            backgroundImage: "url(" + properties.icon + ")"
                        } })),
                    domain && (react_1["default"].createElement("div", { className: 'notion-google-drive-body-source-domain' }, domain))))))));
};
exports.GoogleDrive = GoogleDrive;
//# sourceMappingURL=google-drive.js.map