// array descrtuing
let arr = ["john","smith"];

let[firstname,secondname] = arr;
console.log(firstname);
console.log(secondname);

// object destructuring
const developer = {
    frontend:'react',
    backend:'node',
    database:'mysql'
};

const{ frontend,backend,database} = developer;
console.log(frontend,backend,database);