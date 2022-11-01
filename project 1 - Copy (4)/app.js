// array destructuring
let arr = ["john", "smith"];

let [firstName, sirName] = arr;
console.log(firstName);
console.log(sirName);

//object destructuring
const developer = {
  frontend: "React",
  backend: "node",
  database: "mongodb",
};

const { frontend, backend } = developer;
console.log(frontend, backend);
