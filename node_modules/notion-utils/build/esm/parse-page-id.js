import { idToUuid } from './id-to-uuid';
var pageIdRe = /\b([a-f0-9]{32})\b/;
var pageId2Re = /\b([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\b/;
/**
 * Robustly extracts the notion page ID from a notion URL or pathname suffix.
 *
 * Defaults to returning a UUID (with dashes).
 */
export var parsePageId = function (id, _a) {
    if (id === void 0) { id = ''; }
    var _b = _a === void 0 ? {} : _a, _c = _b.uuid, uuid = _c === void 0 ? true : _c;
    if (!id) {
        return null;
    }
    id = id.split('?')[0];
    var match = id.match(pageIdRe);
    if (match) {
        return uuid ? idToUuid(match[1]) : match[1];
    }
    var match2 = id.match(pageId2Re);
    if (match2) {
        return uuid ? match2[1] : match2[1].replace(/-/g, '');
    }
    return null;
};
//# sourceMappingURL=parse-page-id.js.map