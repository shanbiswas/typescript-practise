

/** 
 * NOTE:- run "tsc --outFile sample.js Test.ts" to compile the typescript files into a single file "sample.js"
 * --outFile flag used to specify the filename where we want the compiled typescript code to be
 * without the --outFile flagall the TS files will be compiled into separate files
*/

/**
 * To RUN this script
 * 
 * run "tsc Test.ts" // it will generate .js files for each of the files
 * then run "node Test.js"
 * 
 * 
 * OR if you are using any tsconfig.js file then do this configuration
 * 
 * {
        "compilerOptions": {
            // ...
            "module": "CommonJS"
            // ...
        },
        // ...
    }
 */

import stringValidator from "./Validation"
import { LettersOnlyValidator } from "./LettersOnlyValidator"
import { ZipCodeValidator } from "./ZipCodeValidator"

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: stringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

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