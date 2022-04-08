import { uuidToId } from './uuid-to-id';
import { getBlockTitle } from './get-block-title';
/**
 * Gets the canonical, display-friendly version of a page's ID for use in URLs.
 */
export var getCanonicalPageId = function (pageId, recordMap, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.uuid, uuid = _d === void 0 ? true : _d;
    if (!pageId || !recordMap)
        return null;
    var id = uuidToId(pageId);
    var block = (_b = recordMap.block[pageId]) === null || _b === void 0 ? void 0 : _b.value;
    if (block) {
        var title = normalizeTitle(getBlockTitle(block, recordMap));
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
export var normalizeTitle = function (title) {
    return (title || '')
        .replace(/ /g, '-')
        .replace(/[^a-zA-Z0-9-\u4e00-\u9fa5]/g, '')
        .replace(/--/g, '-')
        .replace(/-$/, '')
        .replace(/^-/, '')
        .trim()
        .toLowerCase();
};
//# sourceMappingURL=get-canonical-page-id.js.map