var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import CollectionViewTableIcon from './collection-view-table';
import CollectionViewBoardIcon from './collection-view-board';
import CollectionViewGalleryIcon from './collection-view-gallery';
import CollectionViewListIcon from './collection-view-list';
import CollectionViewCalendarIcon from './collection-view-calendar';
var iconMap = {
    table: CollectionViewTableIcon,
    board: CollectionViewBoardIcon,
    gallery: CollectionViewGalleryIcon,
    list: CollectionViewListIcon,
    calendar: CollectionViewCalendarIcon
};
export var CollectionViewIcon = function (_a) {
    var type = _a.type, rest = __rest(_a, ["type"]);
    var icon = iconMap[type];
    if (!icon) {
        return null;
    }
    return icon(rest);
};
//# sourceMappingURL=collection-view-icon.js.map