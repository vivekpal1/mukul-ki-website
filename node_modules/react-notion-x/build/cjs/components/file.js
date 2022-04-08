"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.File = void 0;
var react_1 = __importDefault(require("react"));
var file_icon_1 = require("../icons/file-icon");
var context_1 = require("../context");
var utils_1 = require("../utils");
var text_1 = require("./text");
var File = function (_a) {
    var _b, _c;
    var block = _a.block, className = _a.className;
    var _d = (0, context_1.useNotionContext)(), components = _d.components, recordMap = _d.recordMap;
    var signedUrl = recordMap.signed_urls[block.id];
    return (react_1["default"].createElement("div", { className: (0, utils_1.cs)('notion-file', className) },
        react_1["default"].createElement(components.link, { className: 'notion-file-link', href: signedUrl, target: '_blank', rel: 'noopener noreferrer' },
            react_1["default"].createElement(file_icon_1.FileIcon, { className: 'notion-file-icon' }),
            react_1["default"].createElement("div", { className: 'notion-file-info' },
                react_1["default"].createElement("div", { className: 'notion-file-title' },
                    react_1["default"].createElement(text_1.Text, { value: ((_b = block.properties) === null || _b === void 0 ? void 0 : _b.title) || [['File']], block: block })),
                ((_c = block.properties) === null || _c === void 0 ? void 0 : _c.size) && (react_1["default"].createElement("div", { className: 'notion-file-size' },
                    react_1["default"].createElement(text_1.Text, { value: block.properties.size, block: block })))))));
};
exports.File = File;
//# sourceMappingURL=file.js.map