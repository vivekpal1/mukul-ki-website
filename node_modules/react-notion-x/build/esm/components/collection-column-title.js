import React from 'react';
import { PropertyIcon } from '../icons/property-icon';
export var CollectionColumnTitle = function (_a) {
    var schema = _a.schema;
    return (React.createElement("div", { className: 'notion-collection-column-title' },
        React.createElement(PropertyIcon, { className: 'notion-collection-column-title-icon', type: schema.type }),
        React.createElement("div", { className: 'notion-collection-column-title-body' }, schema.name)));
};
//# sourceMappingURL=collection-column-title.js.map