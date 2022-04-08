"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PropertyIcon = void 0;
var type_title_1 = __importDefault(require("./type-title"));
var type_text_1 = __importDefault(require("./type-text"));
var type_number_1 = __importDefault(require("./type-number"));
var type_select_1 = __importDefault(require("./type-select"));
var type_multi_select_1 = __importDefault(require("./type-multi-select"));
var type_date_1 = __importDefault(require("./type-date"));
var type_person_1 = __importDefault(require("./type-person"));
var type_file_1 = __importDefault(require("./type-file"));
var type_checkbox_1 = __importDefault(require("./type-checkbox"));
var type_url_1 = __importDefault(require("./type-url"));
var type_email_1 = __importDefault(require("./type-email"));
var type_phone_number_1 = __importDefault(require("./type-phone-number"));
var type_formula_1 = __importDefault(require("./type-formula"));
var type_relation_1 = __importDefault(require("./type-relation"));
var type_person_2_1 = __importDefault(require("./type-person-2"));
var type_timestamp_1 = __importDefault(require("./type-timestamp"));
var iconMap = {
    title: type_title_1["default"],
    text: type_text_1["default"],
    number: type_number_1["default"],
    select: type_select_1["default"],
    multi_select: type_multi_select_1["default"],
    date: type_date_1["default"],
    person: type_person_1["default"],
    file: type_file_1["default"],
    checkbox: type_checkbox_1["default"],
    url: type_url_1["default"],
    email: type_email_1["default"],
    phone_number: type_phone_number_1["default"],
    formula: type_formula_1["default"],
    relation: type_relation_1["default"],
    created_time: type_timestamp_1["default"],
    last_edited_time: type_timestamp_1["default"],
    created_by: type_person_2_1["default"],
    last_edited_by: type_person_2_1["default"]
};
var PropertyIcon = function (_a) {
    var type = _a.type, rest = __rest(_a, ["type"]);
    var icon = iconMap[type];
    if (!icon)
        return null;
    return icon(rest);
};
exports.PropertyIcon = PropertyIcon;
//# sourceMappingURL=property-icon.js.map