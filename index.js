import { HashMap } from './hashmap.js';
import { HashSet } from './hashset.js';

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'cheese')
test.set('moon', 'silver')

console.log(test.get('moon'))
console.log(test.has('moon'))
console.log(test.remove('lion'))
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.length());



let example = new HashSet();

example.set('apple')
example.set('banana')
example.set('carrot')
example.set('dog')
example.set('elephant')
example.set('frog')
example.set('grape')
example.set('hat')
example.set('ice cream')
example.set('jacket')
example.set('kite')
example.set('lion')
example.set('moon')
example.set('moon')

console.log(example.get('moon'))
console.log(example.has('moon'))
console.log(example.remove('lion'))
console.log(example.keys());
console.log(example.length());