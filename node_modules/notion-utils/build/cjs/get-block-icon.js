"use strict";
exports.__esModule = true;
exports.getBlockIcon = void 0;
function getBlockIcon(block, recordMap) {
    var _a, _b, _c;
    if ((_a = block.format) === null || _a === void 0 ? void 0 : _a.page_icon) {
        return (_b = block.format) === null || _b === void 0 ? void 0 : _b.page_icon;
    }
    if (block.type === 'collection_view_page' ||
        block.type === 'collection_view') {
        var collection = (_c = recordMap.collection[block.collection_id]) === null || _c === void 0 ? void 0 : _c.value;
        if (collection) {
            return collection.icon;
        }
    }
    return null;
}
exports.getBlockIcon = getBlockIcon;
//# sourceMappingURL=get-block-icon.js.map