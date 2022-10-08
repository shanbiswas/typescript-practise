/**
 * It's recommended to use "ES Modules" instead of "Namespace"
 * The example here in "/namespace/string-validator/multiple-files" is available in "/es-modules/string-validator" using "ES Modules"
 */

/** 
 * NOTE:- run "tsc --outFile sample.js Test.ts" to compile the typescript files into a single file "sample.js"
 * --outFile flag used to specify the filename where we want the compiled typescript code to be
 * without the --outFile flagall the TS files will be compiled into separate files
*/

/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
  console.log()
}