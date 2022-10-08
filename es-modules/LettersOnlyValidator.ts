/**
 * It's recommended to use "ES Modules" instead of "Namespace"
 * The example here in "/namespace/string-validator/multiple-files" is available in "/es-modules/string-validator" using "ES Modules"
 */


import stringValidator from './Validation'


const lettersRegexp = /^[A-Za-z]+$/;

export class LettersOnlyValidator implements stringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
}