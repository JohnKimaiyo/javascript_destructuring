// array destructuring
let arr = ["john", "smith"];

let [firstName, sirName] = arr;

console.log(firstName);
console.log(sirName);

// objcect  detsrucring
const developer = {
  front: "react",
  backend: "node",
  database: "mysql",
};

const { frontend, backend, database } = developer;
console.log(frontend, backend, database);
