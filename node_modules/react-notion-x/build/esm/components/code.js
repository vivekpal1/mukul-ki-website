import React from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
export var Code = function (_a) {
    var code = _a.code, _b = _a.language, language = _b === void 0 ? 'javascript' : _b;
    var languageL = language.toLowerCase();
    var prismLanguage = languages[languageL] || languages.javascript;
    return (React.createElement("pre", { className: "notion-code language-" + languageL },
        React.createElement("code", { className: "language-" + languageL, dangerouslySetInnerHTML: {
                __html: highlight(code, prismLanguage, language)
            } })));
};
//# sourceMappingURL=code.js.map