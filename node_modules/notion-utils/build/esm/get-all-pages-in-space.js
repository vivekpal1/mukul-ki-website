var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import PQueue from 'p-queue';
import { parsePageId } from './parse-page-id';
/**
 * Performs a traversal over a given Notion workspace starting from a seed page.
 *
 * Returns a map containing all of the pages that are reachable from the seed
 * page in the space.
 *
 * If `rootSpaceId` is not defined, the space ID of the root page will be used
 * to scope traversal.
 *
 *
 * @param rootPageId - Page ID to start from.
 * @param rootSpaceId - Space ID to scope traversal.
 * @param getPage - Function used to fetch a single page.
 * @param opts - Optional config
 */
export function getAllPagesInSpace(rootPageId, rootSpaceId, getPage, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.concurrency, concurrency = _c === void 0 ? 4 : _c, _d = _b.traverseCollections, traverseCollections = _d === void 0 ? true : _d, _e = _b.targetPageId, targetPageId = _e === void 0 ? null : _e;
    return __awaiter(this, void 0, void 0, function () {
        function processPage(pageId) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (targetPageId && pendingPageIds.has(targetPageId)) {
                        return [2 /*return*/];
                    }
                    pageId = parsePageId(pageId);
                    if (pageId && !pages[pageId] && !pendingPageIds.has(pageId)) {
                        pendingPageIds.add(pageId);
                        queue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                            var page_1, spaceId, _i, _a, collectionViews, _b, _c, collectionData, blockIds, _d, blockIds_1, collectionItemId, err_1;
                            var _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        _g.trys.push([0, 2, , 3]);
                                        if (targetPageId &&
                                            pendingPageIds.has(targetPageId) &&
                                            pageId !== targetPageId) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, getPage(pageId)];
                                    case 1:
                                        page_1 = _g.sent();
                                        if (!page_1) {
                                            return [2 /*return*/];
                                        }
                                        spaceId = (_f = (_e = page_1.block[pageId]) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.space_id;
                                        if (!rootSpaceId) {
                                            rootSpaceId = spaceId;
                                        }
                                        else if (rootSpaceId !== spaceId) {
                                            return [2 /*return*/];
                                        }
                                        Object.keys(page_1.block)
                                            .filter(function (key) {
                                            var _a;
                                            var block = (_a = page_1.block[key]) === null || _a === void 0 ? void 0 : _a.value;
                                            if (!block)
                                                return false;
                                            var isPage = block.type === 'page' || block.type === 'collection_view_page';
                                            // the space id check is important to limit traversal because pages
                                            // can reference pages in other spaces
                                            return isPage && block.space_id === rootSpaceId;
                                        })
                                            .forEach(function (subPageId) { return processPage(subPageId); });
                                        // traverse collection item pages as they may contain subpages as well
                                        if (traverseCollections) {
                                            for (_i = 0, _a = Object.values(page_1.collection_query); _i < _a.length; _i++) {
                                                collectionViews = _a[_i];
                                                for (_b = 0, _c = Object.values(collectionViews); _b < _c.length; _b++) {
                                                    collectionData = _c[_b];
                                                    blockIds = collectionData.blockIds;
                                                    if (blockIds) {
                                                        for (_d = 0, blockIds_1 = blockIds; _d < blockIds_1.length; _d++) {
                                                            collectionItemId = blockIds_1[_d];
                                                            processPage(collectionItemId);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        pages[pageId] = page_1;
                                        return [3 /*break*/, 3];
                                    case 2:
                                        err_1 = _g.sent();
                                        console.warn('page load error', { pageId: pageId, spaceId: rootSpaceId }, err_1.statusCode, err_1.message);
                                        pages[pageId] = null;
                                        return [3 /*break*/, 3];
                                    case 3:
                                        pendingPageIds["delete"](pageId);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    return [2 /*return*/];
                });
            });
        }
        var pages, pendingPageIds, queue;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    pages = {};
                    pendingPageIds = new Set();
                    queue = new PQueue({ concurrency: concurrency });
                    return [4 /*yield*/, processPage(rootPageId)];
                case 1:
                    _f.sent();
                    return [4 /*yield*/, queue.onIdle()];
                case 2:
                    _f.sent();
                    return [2 /*return*/, pages];
            }
        });
    });
}
//# sourceMappingURL=get-all-pages-in-space.js.map