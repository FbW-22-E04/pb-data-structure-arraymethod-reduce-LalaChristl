
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// function groupById(array) {
//   //write your code here
// }

// const groupById = (arr) => {
//   return arr.reduce((acc, next) => {
//     let firstName = next.id;
//     acc[firstName] = next;
//     return acc;

//   }, {});
// };

function groupById(array) {
  const newReducedArray = array.reduce((accum, item, i) => {
    const id = item.id;

 
    accum[id] = item;
    return accum;
  }, {});
  console.log(newReducedArray);
}


let usersById= groupById(users)
// console.log(groupById(users))

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
  
*/