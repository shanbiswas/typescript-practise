
// function with same name and different property types

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


// all the combinations of parameter types should be written to work with "split"
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add('Max', 56);
result1.split(' ');

const result2 = add(30, ' Schwarz');
result2.split(' ');

const result3 = add('Max', ' Schwarz');
result3.split(' ');

const result4 = add(2, 3);
// result1.split(' ');     // not work because the result is a number