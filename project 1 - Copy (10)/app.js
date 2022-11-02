// array destructuring
let arr = ["john", "smith"];
let [firstname, sirName] = arr;
console.log(firstname);
console.log(sirName);

//  object detsructruing
const developer = {
  frontend: "React",
  backend: "node",
  database: "mysql",
};
const { frontend, backend ,database} = developer;
console.log(frontend, backend,database);
