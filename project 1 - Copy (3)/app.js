// array destructuring
let arr = ["john", "smith"];

let [firstName, sirName] = arr;

console.log(firstName);
console.log(sirName);

// object destructuring

const freecodecamp = {
  frontend: "React",
  backend: "node",
  database: "mongoDB",
};

const { frontend, backend } = freecodecamp;
console.log(frontend, backend);
