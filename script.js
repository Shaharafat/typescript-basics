"use strict";
//
var inputName = document.querySelector("#name");
var inputAge = document.querySelector("#age");
var inputEmail = document.querySelector("#email");
var inputForm = document.querySelector("form"); // (!) ensures object is there.
var greeting = document.querySelector(".greeting");
// interfaces on class
var Person = /** @class */ (function () {
    function Person(name, age, mail) {
        this.name = name;
        this.age = age;
        this.email = mail;
    }
    Person.prototype.greet = function () {
        return "Hi, my name is " + this.name + " and I am " + this.age + " years old. my email is " + this.email;
    };
    return Person;
}());
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(greeting);
    var person = new Person(inputName.value, inputAge.valueAsNumber, inputEmail.value); // value as number
    greeting.innerText = person.greet();
    inputForm.reset();
});
