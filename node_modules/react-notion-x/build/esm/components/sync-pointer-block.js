import React from 'react';
import { NotionBlockRenderer } from '../renderer';
export var SyncPointerBlock = function (props) {
    var _a, _b;
    var block = props.block, level = props.level;
    if (!block) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('missing block', block.id);
        }
        return null;
    }
    var syncPointerBlock = block;
    var referencePointerId = (_b = (_a = syncPointerBlock === null || syncPointerBlock === void 0 ? void 0 : syncPointerBlock.format) === null || _a === void 0 ? void 0 : _a.transclusion_reference_pointer) === null || _b === void 0 ? void 0 : _b.id;
    if (!referencePointerId)
        return null;
    return (React.createElement(NotionBlockRenderer, { key: referencePointerId, level: level, blockId: referencePointerId }));
};
//# sourceMappingURL=sync-pointer-block.js.map