"use strict";
exports.__esModule = true;
exports.getBlockTitle = void 0;
var get_text_content_1 = require("./get-text-content");
function getBlockTitle(block, recordMap) {
    var _a, _b;
    if ((_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) {
        return (0, get_text_content_1.getTextContent)(block.properties.title);
    }
    if (block.type === 'collection_view_page' ||
        block.type === 'collection_view') {
        var collection = (_b = recordMap.collection[block.collection_id]) === null || _b === void 0 ? void 0 : _b.value;
        if (collection) {
            return (0, get_text_content_1.getTextContent)(collection.name);
        }
    }
    return '';
}
exports.getBlockTitle = getBlockTitle;
//# sourceMappingURL=get-block-title.js.map