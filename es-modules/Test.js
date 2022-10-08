"use strict";
/**
 * NOTE:- run "tsc --outFile sample.js Test.ts" to compile the typescript files into a single file "sample.js"
 * --outFile flag used to specify the filename where we want the compiled typescript code to be
 * without the --outFile flagall the TS files will be compiled into separate files
*/
exports.__esModule = true;
var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
var ZipCodeValidator_1 = require("./ZipCodeValidator");
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"".concat(s, "\" - ").concat(validators[name_1].isAcceptable(s) ? "matches" : "does not match", " ").concat(name_1));
    }
    console.log();
}
