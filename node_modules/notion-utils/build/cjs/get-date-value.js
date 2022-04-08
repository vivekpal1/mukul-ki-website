"use strict";
exports.__esModule = true;
exports.getDateValue = void 0;
/**
 * Attempts to find a valid date from a given property.
 */
var getDateValue = function (prop) {
    if (prop && Array.isArray(prop)) {
        if (prop[0] === 'd') {
            return prop[1];
        }
        else {
            for (var _i = 0, prop_1 = prop; _i < prop_1.length; _i++) {
                var v = prop_1[_i];
                var value = (0, exports.getDateValue)(v);
                if (value) {
                    return value;
                }
            }
        }
    }
    return null;
};
exports.getDateValue = getDateValue;
//# sourceMappingURL=get-date-value.js.map