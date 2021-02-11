// use generics when don't know which types of data will recieve
function doSomething<T>(arg: T): T {
  // do something
  return arg;
}

doSomething<string>('3');

interface book<T>{ // its kind of place holder.
  id: number;
  name: string;
  data: T
}

const abook: book<string> = {
  id: 1,
  name: "Title 1",
  data: "more data here"
}