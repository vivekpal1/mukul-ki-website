"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Audio = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("../context");
var utils_1 = require("../utils");
var Audio = function (_a) {
    var block = _a.block, className = _a.className;
    var recordMap = (0, context_1.useNotionContext)().recordMap;
    var signedUrl = recordMap.signed_urls[block.id];
    return (react_1["default"].createElement("div", { className: (0, utils_1.cs)('notion-audio', className) },
        react_1["default"].createElement("audio", { controls: true, preload: 'none', src: signedUrl })));
};
exports.Audio = Audio;
//# sourceMappingURL=audio.js.map