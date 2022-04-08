"use strict";
exports.__esModule = true;
exports.idToUuid = void 0;
var idToUuid = function (id) {
    if (id === void 0) { id = ''; }
    return id.substr(0, 8) + "-" + id.substr(8, 4) + "-" + id.substr(12, 4) + "-" + id.substr(16, 4) + "-" + id.substr(20);
};
exports.idToUuid = idToUuid;
//# sourceMappingURL=id-to-uuid.js.map