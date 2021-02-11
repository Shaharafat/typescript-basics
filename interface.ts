// interface enforce certain structure of an object.
interface PersonInterface {
  name: string;
  age: number;
}

let mike: PersonInterface = {
  name: "Arafat",
  age: 34,
};

// interfaces on class
// class Person implements PersonInterface {
//   private email: string;

//   constructor(public name: string, public age: number, mail: string) {
//     this.email = mail;
//   }

//   greet() {
//     return `Hi, my name is ${this.name} and I am ${this.age} years old. my email is ${this.email}`;
//   }
// }

// let john = new Person("John", 35, "shaharafat@outlook.com");
// console.log(john.greet());
