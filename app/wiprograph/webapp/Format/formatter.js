sap.ui.define([], function () {
    "use strict";
    return {
        countItems: function (aItems) {
            return aItems ? aItems.length : 0;
        }
    };
});