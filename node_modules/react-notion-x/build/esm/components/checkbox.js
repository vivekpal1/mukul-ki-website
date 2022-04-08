import React from 'react';
import CheckIcon from '../icons/check';
export var Checkbox = function (_a) {
    var isChecked = _a.isChecked;
    var content = null;
    if (isChecked) {
        content = (React.createElement("div", { className: 'notion-property-checkbox-checked' },
            React.createElement(CheckIcon, null)));
    }
    else {
        content = React.createElement("div", { className: 'notion-property-checkbox-unchecked' });
    }
    return (React.createElement("span", { className: 'notion-property notion-property-checkbox' }, content));
};
//# sourceMappingURL=checkbox.js.map