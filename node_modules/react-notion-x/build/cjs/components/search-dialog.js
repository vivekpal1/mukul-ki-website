"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SearchDialog = void 0;
var react_1 = __importDefault(require("react"));
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
var notion_utils_1 = require("notion-utils");
var search_icon_1 = require("../icons/search-icon");
var clear_icon_1 = require("../icons/clear-icon");
var loading_icon_1 = require("../icons/loading-icon");
var page_title_1 = require("./page-title");
var utils_1 = require("../utils");
var context_1 = require("../context");
// TODO: modal.default.setAppElement('.notion-viewport')
var SearchDialog = /** @class */ (function (_super) {
    __extends(SearchDialog, _super);
    function SearchDialog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: false,
            query: '',
            searchResult: null,
            searchError: null
        };
        _this._onAfterOpen = function () {
            if (_this._inputRef.current) {
                _this._inputRef.current.focus();
            }
        };
        _this._onChangeQuery = function (e) {
            var query = e.target.value;
            _this.setState({ query: query });
            if (!query.trim()) {
                _this.setState({ isLoading: false, searchResult: null, searchError: null });
                return;
            }
            else {
                _this._search();
            }
        };
        _this._onClearQuery = function () {
            _this._onChangeQuery({ target: { value: '' } });
        };
        _this._searchImpl = function () { return __awaiter(_this, void 0, void 0, function () {
            var searchNotion, query, result, searchResult, searchError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchNotion = this.props.searchNotion;
                        query = this.state.query;
                        if (!query.trim()) {
                            this.setState({ isLoading: false, searchResult: null, searchError: null });
                            return [2 /*return*/];
                        }
                        this.setState({ isLoading: true });
                        return [4 /*yield*/, searchNotion({
                                query: query,
                                ancestorId: this.props.rootBlockId
                            })];
                    case 1:
                        result = _a.sent();
                        console.log('search', query, result);
                        searchResult = null // TODO
                        ;
                        searchError = null;
                        if (result.error || result.errorId) {
                            searchError = result;
                        }
                        else {
                            searchResult = result;
                            searchResult.results = searchResult.results
                                .map(function (result) {
                                var _a;
                                if (!result.isNavigable)
                                    return;
                                var block = (_a = searchResult.recordMap.block[result.id]) === null || _a === void 0 ? void 0 : _a.value;
                                if (!block)
                                    return;
                                var title = (0, notion_utils_1.getBlockTitle)(block, searchResult.recordMap);
                                if (!title) {
                                    return;
                                }
                                result.title = title;
                                result.block = block;
                                result.recordMap = searchResult.recordMap;
                                return result;
                            })
                                .filter(Boolean);
                        }
                        if (this.state.query === query) {
                            this.setState({ isLoading: false, searchResult: searchResult, searchError: searchError });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this._inputRef = react_1["default"].createRef();
        return _this;
    }
    SearchDialog.prototype.componentDidMount = function () {
        this._search = (0, lodash_throttle_1["default"])(this._searchImpl.bind(this), 1000);
    };
    SearchDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, isOpen = _a.isOpen, onClose = _a.onClose;
        var _b = this.state, isLoading = _b.isLoading, query = _b.query, searchResult = _b.searchResult, searchError = _b.searchError;
        var hasQuery = !!query.trim();
        return (react_1["default"].createElement(context_1.NotionContextConsumer, null, function (ctx) {
            var components = ctx.components, defaultPageIcon = ctx.defaultPageIcon, mapPageUrl = ctx.mapPageUrl;
            return (react_1["default"].createElement(components.modal, { isOpen: isOpen, contentLabel: 'Search', className: 'notion-search', overlayClassName: 'notion-search-overlay', onRequestClose: onClose, onAfterOpen: _this._onAfterOpen },
                react_1["default"].createElement("div", { className: 'quickFindMenu' },
                    react_1["default"].createElement("div", { className: 'searchBar' },
                        react_1["default"].createElement("div", { className: 'inlineIcon' }, isLoading ? (react_1["default"].createElement(loading_icon_1.LoadingIcon, { className: 'loadingIcon' })) : (react_1["default"].createElement(search_icon_1.SearchIcon, null))),
                        react_1["default"].createElement("input", { className: 'searchInput', placeholder: 'Search', value: query, ref: _this._inputRef, onChange: _this._onChangeQuery }),
                        query && (react_1["default"].createElement("div", { role: 'button', className: 'clearButton', onClick: _this._onClearQuery },
                            react_1["default"].createElement(clear_icon_1.ClearIcon, { className: 'clearIcon' })))),
                    hasQuery && searchResult && (react_1["default"].createElement(react_1["default"].Fragment, null, searchResult.results.length ? (react_1["default"].createElement(context_1.NotionContextProvider, __assign({}, ctx, { recordMap: searchResult.recordMap }),
                        react_1["default"].createElement("div", { className: 'resultsPane' }, searchResult.results.map(function (result) { return (react_1["default"].createElement(components.pageLink, { key: result.id, className: (0, utils_1.cs)('result', 'notion-page-link'), href: mapPageUrl(result.block.id, searchResult.recordMap) },
                            react_1["default"].createElement(page_title_1.PageTitle, { block: result.block, defaultIcon: defaultPageIcon }))); })),
                        react_1["default"].createElement("footer", { className: 'resultsFooter' },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("span", { className: 'resultsCount' }, searchResult.total),
                                searchResult.total === 1 ? ' result' : ' results')))) : (react_1["default"].createElement("div", { className: 'noResultsPane' },
                        react_1["default"].createElement("div", { className: 'noResults' }, "No results"),
                        react_1["default"].createElement("div", { className: 'noResultsDetail' }, "Try different search terms"))))),
                    hasQuery && !searchResult && searchError && (react_1["default"].createElement("div", { className: 'noResultsPane' },
                        react_1["default"].createElement("div", { className: 'noResults' }, "Search error"))))));
        }));
    };
    return SearchDialog;
}(react_1["default"].Component));
exports.SearchDialog = SearchDialog;
//# sourceMappingURL=search-dialog.js.map