"use strict";
var aString;
aString = "Hi";
var aNumber;
aNumber = 2;
var aBoolean;
aBoolean = false;
var anyVar;
anyVar = false;
// union
var year; // takes string or number
year = 2021;
year = "2021";
// array
var arrString = ["a", "b", "c"];
arrString[0] = "d";
var arrNumber = [1, 2, 3];
arrNumber[0] = 4;
var arrBool = [true, false];
arrBool.push(false);
var arrMix = [1, "a", false];
// tuple
var arrTup = ["a string", 3];
