/**
 * It's recommended to use "ES Modules" instead of "Namespace"
 * The example here in "/namespace/string-validator/multiple-files" is available in "/es-modules/string-validator" using "ES Modules"
 */


namespace Validation {
    export interface StringValidator {
      isAcceptable(s: string): boolean;
    }
}