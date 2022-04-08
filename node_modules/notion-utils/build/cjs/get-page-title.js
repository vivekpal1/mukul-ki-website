"use strict";
exports.__esModule = true;
exports.getPageTitle = void 0;
var get_block_title_1 = require("./get-block-title");
function getPageTitle(recordMap) {
    var _a;
    var pageBlock = (_a = recordMap.block[Object.keys(recordMap.block)[0]]) === null || _a === void 0 ? void 0 : _a.value;
    if (pageBlock) {
        return (0, get_block_title_1.getBlockTitle)(pageBlock, recordMap);
    }
    return null;
}
exports.getPageTitle = getPageTitle;
//# sourceMappingURL=get-page-title.js.map