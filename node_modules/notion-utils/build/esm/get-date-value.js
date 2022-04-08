/**
 * Attempts to find a valid date from a given property.
 */
export var getDateValue = function (prop) {
    if (prop && Array.isArray(prop)) {
        if (prop[0] === 'd') {
            return prop[1];
        }
        else {
            for (var _i = 0, prop_1 = prop; _i < prop_1.length; _i++) {
                var v = prop_1[_i];
                var value = getDateValue(v);
                if (value) {
                    return value;
                }
            }
        }
    }
    return null;
};
//# sourceMappingURL=get-date-value.js.map