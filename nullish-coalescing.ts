

// checks NULL, UNDEFINED and FALSE values
let val_1 = ''
let res_1 = val_1 || 'DEFAULT'
console.log(res_1)     // prints 'DEFAULT'



// checks NULL and UNDEFINED values
let val_2 = ''
let res_2 = val_2 && 'DEFAULT'
console.log(res_2)      // prints ''