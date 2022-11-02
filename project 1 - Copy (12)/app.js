// array destructuring
let arr =["john","smith"];
let [firstName,sirName] = arr;

console.log(firstName);
console.log(sirName);

// object detsruuring
const developer ={
    frontend:'react',
    backend:'node',
    database:'mysql'
};

const {frontend,backend,database} = developer
console.log(frontend,backend,database);