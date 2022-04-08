"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Code = void 0;
var react_1 = __importDefault(require("react"));
var prismjs_1 = require("prismjs");
require("prismjs/components/prism-jsx");
var Code = function (_a) {
    var code = _a.code, _b = _a.language, language = _b === void 0 ? 'javascript' : _b;
    var languageL = language.toLowerCase();
    var prismLanguage = prismjs_1.languages[languageL] || prismjs_1.languages.javascript;
    return (react_1["default"].createElement("pre", { className: "notion-code language-" + languageL },
        react_1["default"].createElement("code", { className: "language-" + languageL, dangerouslySetInnerHTML: {
                __html: (0, prismjs_1.highlight)(code, prismLanguage, language)
            } })));
};
exports.Code = Code;
//# sourceMappingURL=code.js.map