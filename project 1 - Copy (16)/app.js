// array destructing
let arr =["john","smith"];

let[firstname,sirname] = arr;
console.log(firstname);
console.log(sirname);

// onject destcruring
const developer ={
    frontend:'react',
    backend:'node',
    database:'mysql'
}

const {frontend,backend,database} = developer
console.log(frontend,backend,database);