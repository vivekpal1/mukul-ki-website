import { getTextContent } from './get-text-content';
export function getBlockTitle(block, recordMap) {
    var _a, _b;
    if ((_a = block.properties) === null || _a === void 0 ? void 0 : _a.title) {
        return getTextContent(block.properties.title);
    }
    if (block.type === 'collection_view_page' ||
        block.type === 'collection_view') {
        var collection = (_b = recordMap.collection[block.collection_id]) === null || _b === void 0 ? void 0 : _b.value;
        if (collection) {
            return getTextContent(collection.name);
        }
    }
    return '';
}
//# sourceMappingURL=get-block-title.js.map