"use strict";
exports.__esModule = true;
exports.normalizeTitle = exports.getCanonicalPageId = void 0;
var uuid_to_id_1 = require("./uuid-to-id");
var get_block_title_1 = require("./get-block-title");
/**
 * Gets the canonical, display-friendly version of a page's ID for use in URLs.
 */
var getCanonicalPageId = function (pageId, recordMap, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.uuid, uuid = _d === void 0 ? true : _d;
    if (!pageId || !recordMap)
        return null;
    var id = (0, uuid_to_id_1.uuidToId)(pageId);
    var block = (_b = recordMap.block[pageId]) === null || _b === void 0 ? void 0 : _b.value;
    if (block) {
        var title = (0, exports.normalizeTitle)((0, get_block_title_1.getBlockTitle)(block, recordMap));
        if (title) {
            if (uuid) {
                return title + "-" + id;
            }
            else {
                return title;
            }
        }
    }
    return id;
};
exports.getCanonicalPageId = getCanonicalPageId;
var normalizeTitle = function (title) {
    return (title || '')
        .replace(/ /g, '-')
        .replace(/[^a-zA-Z0-9-\u4e00-\u9fa5]/g, '')
        .replace(/--/g, '-')
        .replace(/-$/, '')
        .replace(/^-/, '')
        .trim()
        .toLowerCase();
};
exports.normalizeTitle = normalizeTitle;
//# sourceMappingURL=get-canonical-page-id.js.map