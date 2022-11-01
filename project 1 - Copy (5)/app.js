// array destructuring
let arr = ['john',"smith"];

let [firstName,sirName] = arr;

console.log(firstName);
console.log(sirName);

// object destrucuring
const developer = {
    frontend:'react',
    backend:'node',
    database:"mongoDB"
}

const {frontend,backend,cloud='AZURE'} = developer;
console.log(frontend,backend,cloud)