import { test, HashMap } from './hashmap.js';

let map = new HashMap();

map.set('dog', 'blue');
map.set('panther', 'pink');
map.set('horse', 'brown');

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

test(map.length());