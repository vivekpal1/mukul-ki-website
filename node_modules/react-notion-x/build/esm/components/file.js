import React from 'react';
import { FileIcon } from '../icons/file-icon';
import { useNotionContext } from '../context';
import { cs } from '../utils';
import { Text } from './text';
export var File = function (_a) {
    var _b, _c;
    var block = _a.block, className = _a.className;
    var _d = useNotionContext(), components = _d.components, recordMap = _d.recordMap;
    var signedUrl = recordMap.signed_urls[block.id];
    return (React.createElement("div", { className: cs('notion-file', className) },
        React.createElement(components.link, { className: 'notion-file-link', href: signedUrl, target: '_blank', rel: 'noopener noreferrer' },
            React.createElement(FileIcon, { className: 'notion-file-icon' }),
            React.createElement("div", { className: 'notion-file-info' },
                React.createElement("div", { className: 'notion-file-title' },
                    React.createElement(Text, { value: ((_b = block.properties) === null || _b === void 0 ? void 0 : _b.title) || [['File']], block: block })),
                ((_c = block.properties) === null || _c === void 0 ? void 0 : _c.size) && (React.createElement("div", { className: 'notion-file-size' },
                    React.createElement(Text, { value: block.properties.size, block: block })))))));
};
//# sourceMappingURL=file.js.map