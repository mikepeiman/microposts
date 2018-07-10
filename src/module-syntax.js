// CommonJS module syntax
const myModule1 = require('./module-1')
// ES2015 module syntax
// import {person, sayHello} from './module-2'
// Or, import it all
// import * as x from './module-2'
import greeting from './module-2'

// let greeting = 'Hello World';
// console.log(greeting, myModule1, person);
// console.log(sayHello())

// how it looks after import * as x
// console.log(greeting, myModule1, x.person);
// console.log(x.sayHello())

console.log(greeting)