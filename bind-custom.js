function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Misha', age: 22, job: 'Frontend'};
const person2 = {name: 'Elena', age: 19, job: 'SMM'};

function myBind(context, func) {
  return function(...args) {
    func.apply(context, args);
  }
}

myBind(person1, logPerson)();
myBind(person2, logPerson)();
