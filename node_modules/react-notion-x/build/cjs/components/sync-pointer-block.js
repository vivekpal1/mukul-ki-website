"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SyncPointerBlock = void 0;
var react_1 = __importDefault(require("react"));
var renderer_1 = require("../renderer");
var SyncPointerBlock = function (props) {
    var _a, _b;
    var block = props.block, level = props.level;
    if (!block) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('missing block', block.id);
        }
        return null;
    }
    var syncPointerBlock = block;
    var referencePointerId = (_b = (_a = syncPointerBlock === null || syncPointerBlock === void 0 ? void 0 : syncPointerBlock.format) === null || _a === void 0 ? void 0 : _a.transclusion_reference_pointer) === null || _b === void 0 ? void 0 : _b.id;
    if (!referencePointerId)
        return null;
    return (react_1["default"].createElement(renderer_1.NotionBlockRenderer, { key: referencePointerId, level: level, blockId: referencePointerId }));
};
exports.SyncPointerBlock = SyncPointerBlock;
//# sourceMappingURL=sync-pointer-block.js.map