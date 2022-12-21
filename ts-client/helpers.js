"use strict";
exports.__esModule = true;
exports.getStructure = exports.MissingWalletError = void 0;
exports.MissingWalletError = new Error("wallet is required");
function getStructure(template) {
    var structure = { fields: [] };
    for (var _i = 0, _a = Object.entries(template); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
exports.getStructure = getStructure;
