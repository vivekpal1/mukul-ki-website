import { getBlockTitle } from './get-block-title';
export function getPageTitle(recordMap) {
    var _a;
    var pageBlock = (_a = recordMap.block[Object.keys(recordMap.block)[0]]) === null || _a === void 0 ? void 0 : _a.value;
    if (pageBlock) {
        return getBlockTitle(pageBlock, recordMap);
    }
    return null;
}
//# sourceMappingURL=get-page-title.js.map