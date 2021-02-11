// type aliases
type stringOrNum = string | number;
let years: stringOrNum;
years = 2021;
years = "2021";

// functions
// function calcSum(a: number, b: number): number {
//   return a + b;
// }

// calcSum(2, 2);

let calcSum: (a: number, b: number, c?:number) => number; //alias
calcSum = (first: number, second: number) => {
  return first + second;
}
calcSum(1, 2); // third one is optional so ? used