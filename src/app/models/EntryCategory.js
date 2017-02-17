"use strict";
/**
 * Created by officeaccount on 15/02/2017.
 */
var EntryCategory = (function () {
    function EntryCategory(value, img, desc) {
        if (value === void 0) { value = ''; }
        if (img === void 0) { img = ''; }
        if (desc === void 0) { desc = ''; }
        this.value = '';
        this.img = '';
        this.desc = '';
        this.value = value;
        this.img = img;
        this.desc = desc;
    }
    return EntryCategory;
}());
exports.EntryCategory = EntryCategory;
//# sourceMappingURL=EntryCategory.js.map