"use strict";
exports.__esModule = true;
exports.getBlockParentPage = void 0;
/**
 * Returns the parent page block containing a given page.
 *
 * Note that many times this will not be the direct parent block since
 * some non-page content blocks can contain sub-blocks.
 */
var getBlockParentPage = function (block, recordMap) {
    var _a, _b, _c;
    var currentRecord = block;
    while (currentRecord != null) {
        var parentId = currentRecord.parent_id;
        var parentTable = currentRecord.parent_table;
        if (parentTable === 'collection') {
            currentRecord = (_a = recordMap.collection[parentId]) === null || _a === void 0 ? void 0 : _a.value;
        }
        else {
            currentRecord = (_b = recordMap.block[parentId]) === null || _b === void 0 ? void 0 : _b.value;
            if (((_c = currentRecord) === null || _c === void 0 ? void 0 : _c.type) === 'page') {
                return currentRecord;
            }
        }
    }
    return null;
};
exports.getBlockParentPage = getBlockParentPage;
//# sourceMappingURL=get-block-parent-page.js.map