const personOne = {
  name: "kyle",
  age: 24,
  address: {
    city: "somewhere",
    state: "one of the,",
  },
};

const personTwo = {
  name: "sally",
  age: 32,
  address: {
    city: "somewhere else",
    state: "another one of them",
  },
};

const{ name,age } = personTwo

console.log(age)