"use strict";
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
;
var myCar = {
    year: 2021,
    make: ManufacturerMake.VOLVO
};
console.log(myCar.make); // 3 (index of volvo)
