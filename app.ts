let aString: string;
aString = "Hi";

let aNumber: number;
aNumber = 2;

let aBoolean: boolean;
aBoolean = false;

let anyVar: any;
anyVar = false;

// union
let year: string | number; // takes string or number
year = 2021;
year = "2021";

// array
let arrString: string[] = ["a", "b", "c"];
arrString[0] = "d";

let arrNumber: number[] = [1, 2, 3];
arrNumber[0] = 4;

let arrBool: boolean[] = [true, false];
arrBool.push(false);

let arrMix: (string | number | boolean)[] = [1, "a", false];

// tuple
let arrTup : [string, number] = ["a string", 3];
