"use strict";
/**
 * It's recommended to use "ES Modules" instead of "Namespace"
 * The example here in "/namespace/string-validator/multiple-files" is available in "/es-modules/string-validator" using "ES Modules"
 */
exports.__esModule = true;
exports.ZipCodeValidator = void 0;
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
