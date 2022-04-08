import React from 'react';
import { getBlockIcon, getBlockTitle } from 'notion-utils';
import { cs, isUrl } from '../utils';
import { DefaultPageIcon } from '../icons/default-page-icon';
import { useNotionContext } from '../context';
import { GracefulImage } from './graceful-image';
var isIconBlock = function (value) {
    return (value.type === 'page' ||
        value.type === 'callout' ||
        value.type === 'collection_view' ||
        value.type === 'collection_view_page');
};
export var PageIcon = function (_a) {
    var _b;
    var block = _a.block, className = _a.className, _c = _a.hideDefaultIcon, hideDefaultIcon = _c === void 0 ? false : _c, defaultIcon = _a.defaultIcon;
    var _d = useNotionContext(), mapImageUrl = _d.mapImageUrl, recordMap = _d.recordMap;
    if (!isIconBlock(block)) {
        return null;
    }
    var icon = (_b = getBlockIcon(block, recordMap)) !== null && _b !== void 0 ? _b : defaultIcon;
    var title = getBlockTitle(block, recordMap);
    if (icon && isUrl(icon)) {
        var url = mapImageUrl(icon, block);
        return (React.createElement(GracefulImage, { className: cs(className, 'notion-page-icon'), src: url, alt: title ? title : 'Icon', loading: 'lazy' }));
    }
    else {
        var iconValue = icon === null || icon === void 0 ? void 0 : icon.trim();
        if (!iconValue) {
            if (hideDefaultIcon) {
                return null;
            }
            return (React.createElement(DefaultPageIcon, { className: cs(className, 'notion-page-icon'), alt: title ? title : 'Page' }));
        }
        return (React.createElement("span", { className: cs(className, 'notion-page-icon'), role: 'img', "aria-label": icon }, iconValue));
    }
};
//# sourceMappingURL=page-icon.js.map