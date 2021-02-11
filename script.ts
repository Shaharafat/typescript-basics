//
const inputName = document.querySelector("#name") as HTMLInputElement;
const inputAge = document.querySelector("#age") as HTMLInputElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;
const inputForm = document.querySelector("form")!; // (!) ensures object is there.
const greeting = document.querySelector(".greeting") as HTMLDivElement;



// interface enforce certain structure of an object.
interface PersonInterface {
  name: string;
  age: number;
}

// interfaces on class
class Person implements PersonInterface {
  private email: string;

  constructor(public name: string, public age: number, mail: string) {
    this.email = mail;
  }

  greet() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old. my email is ${this.email}`;
  }
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(greeting);
  const person = new Person(
    inputName.value,
    inputAge.valueAsNumber,
    inputEmail.value
  ); // value as number

  greeting.innerText = person.greet();
  inputForm.reset();
});
