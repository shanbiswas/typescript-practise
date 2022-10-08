/**
 * It's recommended to use "ES Modules" instead of "Namespace"
 * The example here in "/namespace/string-validator/multiple-files" is available in "/es-modules/string-validator" using "ES Modules"
 */


 import stringValidator from './Validation'


const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements stringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
}