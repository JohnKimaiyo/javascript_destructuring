// array destructuring
let arr =["john","smith"];
let[firstName,surname] = arr;
console.log(firstName);
console.log(surname);

// object destruction
const freeCodeCamp ={
    frontend:"React",
    backend:"Node",
    database:"MongoDB"
}

const {frontend, backend} = freeCodeCamp;
console.log(frontend,backend);