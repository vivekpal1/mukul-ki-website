"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CollectionCard = void 0;
var react_1 = __importDefault(require("react"));
var notion_utils_1 = require("notion-utils");
var property_1 = require("./property");
var utils_1 = require("../utils");
var context_1 = require("../context");
var lazy_image_1 = require("./lazy-image");
var CollectionCard = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var collection = _a.collection, block = _a.block, cover = _a.cover, coverSize = _a.coverSize, coverAspect = _a.coverAspect, properties = _a.properties, className = _a.className, rest = __rest(_a, ["collection", "block", "cover", "coverSize", "coverAspect", "properties", "className"]);
    var ctx = (0, context_1.useNotionContext)();
    var components = ctx.components, recordMap = ctx.recordMap, mapPageUrl = ctx.mapPageUrl, mapImageUrl = ctx.mapImageUrl;
    var coverContent = null;
    var _q = (block.format || {}).page_cover_position, page_cover_position = _q === void 0 ? 0.5 : _q;
    var coverPosition = (1 - page_cover_position) * 100;
    if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'page_content') {
        var contentBlockId = (_b = block.content) === null || _b === void 0 ? void 0 : _b.find(function (blockId) {
            var _a;
            var block = (_a = recordMap.block[blockId]) === null || _a === void 0 ? void 0 : _a.value;
            if ((block === null || block === void 0 ? void 0 : block.type) === 'image') {
                return true;
            }
        });
        if (contentBlockId) {
            var contentBlock = (_c = recordMap.block[contentBlockId]) === null || _c === void 0 ? void 0 : _c.value;
            var source = (_g = (_f = (_e = (_d = contentBlock.properties) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f[0]) !== null && _g !== void 0 ? _g : (_h = contentBlock.format) === null || _h === void 0 ? void 0 : _h.display_source;
            if (source) {
                var src = mapImageUrl(source, contentBlock);
                var caption = (_l = (_k = (_j = contentBlock.properties) === null || _j === void 0 ? void 0 : _j.caption) === null || _k === void 0 ? void 0 : _k[0]) === null || _l === void 0 ? void 0 : _l[0];
                coverContent = (react_1["default"].createElement(lazy_image_1.LazyImage, { src: src, alt: caption || 'notion image', style: {
                        objectFit: coverAspect
                    } }));
            }
        }
        if (!coverContent) {
            coverContent = react_1["default"].createElement("div", { className: 'notion-collection-card-cover-empty' });
        }
    }
    else if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'page_cover') {
        var page_cover = (block.format || {}).page_cover;
        if (page_cover) {
            var coverPosition_1 = (1 - page_cover_position) * 100;
            coverContent = (react_1["default"].createElement(lazy_image_1.LazyImage, { src: mapImageUrl(page_cover, block), alt: (0, notion_utils_1.getTextContent)((_m = block.properties) === null || _m === void 0 ? void 0 : _m.title), style: {
                    objectFit: coverAspect,
                    objectPosition: "center " + coverPosition_1 + "%"
                } }));
        }
    }
    else if ((cover === null || cover === void 0 ? void 0 : cover.type) === 'property') {
        var property = cover.property;
        var schema = collection.schema[property];
        var data = (_o = block.properties) === null || _o === void 0 ? void 0 : _o[property];
        if (schema && data) {
            if (schema.type === 'file') {
                var files = data
                    .filter(function (v) { return v.length === 2; })
                    .map(function (f) { return f.flat().flat(); });
                var file = files[0];
                if (file) {
                    coverContent = (react_1["default"].createElement("span", { className: "notion-property-" + schema.type },
                        react_1["default"].createElement(lazy_image_1.LazyImage, { alt: file[0], src: mapImageUrl(file[2], block), style: {
                                objectFit: coverAspect,
                                objectPosition: "center " + coverPosition + "%"
                            } })));
                }
            }
            else {
                coverContent = react_1["default"].createElement(property_1.Property, { schema: schema, data: data });
            }
        }
    }
    return (react_1["default"].createElement(context_1.NotionContextProvider, __assign({}, ctx, { components: __assign(__assign({}, ctx.components), { 
            // Disable <a> tabs in all child components so we don't create invalid DOM
            // trees with stacked <a> tags.
            link: context_1.dummyLink, pageLink: context_1.dummyLink }) }),
        react_1["default"].createElement(components.pageLink, __assign({ className: (0, utils_1.cs)('notion-collection-card', "notion-collection-card-size-" + coverSize, className), href: mapPageUrl(block.id) }, rest),
            (coverContent || (cover === null || cover === void 0 ? void 0 : cover.type) !== 'none') && (react_1["default"].createElement("div", { className: 'notion-collection-card-cover' }, coverContent)),
            react_1["default"].createElement("div", { className: 'notion-collection-card-body' },
                react_1["default"].createElement("div", { className: 'notion-collection-card-property' },
                    react_1["default"].createElement(property_1.Property, { schema: collection.schema.title, data: (_p = block === null || block === void 0 ? void 0 : block.properties) === null || _p === void 0 ? void 0 : _p.title, block: block, collection: collection })), properties === null || properties === void 0 ? void 0 :
                properties.filter(function (p) {
                    return p.visible &&
                        p.property !== 'title' &&
                        collection.schema[p.property];
                }).map(function (p) {
                    if (!block.properties)
                        return null;
                    var schema = collection.schema[p.property];
                    var data = block.properties[p.property];
                    return (react_1["default"].createElement("div", { className: 'notion-collection-card-property', key: p.property },
                        react_1["default"].createElement(property_1.Property, { schema: schema, data: data, block: block, collection: collection, inline: true })));
                })))));
};
exports.CollectionCard = CollectionCard;
//# sourceMappingURL=collection-card.js.map