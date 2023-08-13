//callbacks
// const greeting = (name, call) => {
//   console.log("hello", name);
//   call();
// };

// const res = greeting("salman");
// console.log(res);
// const hello = () => {
//   console.log("yes ,  i am callback ");
// };

// hello();

// greeting("salman", hello);

// example2
// const greeting = (name) => {
//   console.log("hello", name);
// };

// const hello = () => {
//   console.log("i will take time to run ");
// };

// setTimeout(hello, 2000);

// greeting("khan");

// example3
// const greeting = (name, myFuction) => {
//   console.log("hello world");
//   myFuction(name);
// };

// const hello = (name) => {
//   console.log("Hello", name);
// };

// // setTimeout(hello, 2000);

// // hello("khan");

// setTimeout(greeting, 2000, "ali", hello);

console.log("fired first");
console.log("fired second");

setTimeout(() => {
  console.log("fired third");
}, 2000);

console.log("fired last");
