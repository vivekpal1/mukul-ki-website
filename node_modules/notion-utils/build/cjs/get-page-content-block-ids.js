"use strict";
exports.__esModule = true;
exports.getPageContentBlockIds = void 0;
/**
 * Gets the IDs of all blocks contained on a page starting from a root block ID.
 */
var getPageContentBlockIds = function (recordMap, blockId) {
    var _a, _b, _c;
    var rootBlockId = blockId || Object.keys(recordMap.block)[0];
    var contentBlockIds = new Set();
    function addContentBlocks(blockId) {
        var _a;
        if (contentBlockIds.has(blockId))
            return;
        contentBlockIds.add(blockId);
        var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
        if (!block)
            return;
        var content = block.content, type = block.type;
        if (!content)
            return;
        if (type === 'page' && blockId !== rootBlockId) {
            // ignore subpages
            return;
        }
        for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
            var blockId_1 = content_1[_i];
            addContentBlocks(blockId_1);
        }
    }
    addContentBlocks(rootBlockId);
    for (var _i = 0, _d = Object.keys(recordMap.block); _i < _d.length; _i++) {
        var blockId_2 = _d[_i];
        var block = (_a = recordMap.block[blockId_2]) === null || _a === void 0 ? void 0 : _a.value;
        if (!block)
            continue;
        var properties = block.properties;
        if (properties) {
            // TODO: this needs some love, especially for resolving relation properties
            // see this collection_view_page for an example: 8a586d253f984b85b48254da84465d23
            for (var _e = 0, _f = Object.keys(properties); _e < _f.length; _e++) {
                var key = _f[_e];
                var p = properties[key];
                p.map(function (d) {
                    var _a, _b;
                    var value = (_b = (_a = d === null || d === void 0 ? void 0 : d[0]) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b[0];
                    if ((value === null || value === void 0 ? void 0 : value[0]) === 'p' && value[1]) {
                        contentBlockIds.add(value[1]);
                    }
                });
                // [["‣", [["p", "841918aa-f2a3-4d4c-b5ad-64b0f57c47b8"]]]]
                var value = (_c = (_b = p === null || p === void 0 ? void 0 : p[0]) === null || _b === void 0 ? void 0 : _b[1]) === null || _c === void 0 ? void 0 : _c[0];
                if ((value === null || value === void 0 ? void 0 : value[0]) === 'p' && value[1]) {
                    contentBlockIds.add(value[1]);
                }
            }
        }
    }
    return Array.from(contentBlockIds);
};
exports.getPageContentBlockIds = getPageContentBlockIds;
//# sourceMappingURL=get-page-content-block-ids.js.map