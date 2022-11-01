// array destructuring
let arr = ["john", "smith"];

let [firstName, sirName] = arr;
console.log(firstName);
console.log(sirName);

// object detsrucring
const developer = {
  frontend: "react",
  backend: "node",
  database: "mongoDB",
};

const { frontend, backend } = developer;
console.log(frontend, backend);
