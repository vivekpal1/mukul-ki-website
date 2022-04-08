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
import TitleIcon from './type-title';
import TextIcon from './type-text';
import NumberIcon from './type-number';
import SelectIcon from './type-select';
import MultiSelectIcon from './type-multi-select';
import DateIcon from './type-date';
import PersonIcon from './type-person';
import FileIcon from './type-file';
import CheckboxIcon from './type-checkbox';
import UrlIcon from './type-url';
import EmailIcon from './type-email';
import PhoneNumberIcon from './type-phone-number';
import FormulaIcon from './type-formula';
import RelationIcon from './type-relation';
import Person2Icon from './type-person-2';
import TimestampIcon from './type-timestamp';
var iconMap = {
    title: TitleIcon,
    text: TextIcon,
    number: NumberIcon,
    select: SelectIcon,
    multi_select: MultiSelectIcon,
    date: DateIcon,
    person: PersonIcon,
    file: FileIcon,
    checkbox: CheckboxIcon,
    url: UrlIcon,
    email: EmailIcon,
    phone_number: PhoneNumberIcon,
    formula: FormulaIcon,
    relation: RelationIcon,
    created_time: TimestampIcon,
    last_edited_time: TimestampIcon,
    created_by: Person2Icon,
    last_edited_by: Person2Icon
};
export var PropertyIcon = function (_a) {
    var type = _a.type, rest = __rest(_a, ["type"]);
    var icon = iconMap[type];
    if (!icon)
        return null;
    return icon(rest);
};
//# sourceMappingURL=property-icon.js.map