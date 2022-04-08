/**
 * Gets the raw, unformatted text content of a block's content value.
 *
 * This is useful, for instance, for extracting a block's `title` without any
 * rich text formatting.
 */
export var getTextContent = function (text) {
    var _a;
    if (!text) {
        return '';
    }
    else if (Array.isArray(text)) {
        return ((_a = text === null || text === void 0 ? void 0 : text.reduce(function (prev, current) {
            return prev + (current[0] !== '⁍' && current[0] !== '‣' ? current[0] : '');
        }, '')) !== null && _a !== void 0 ? _a : '');
    }
    else {
        return text;
    }
};
//# sourceMappingURL=get-text-content.js.map