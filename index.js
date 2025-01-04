import { test, HashMap } from './hashmap.js';

let map = new HashMap();

map.set('dog', 'blue');
map.set('panther', 'pink');
map.set('horse', 'brown');
test(map.get('dog'));
test(map.get('cat'));
test(map.has('dog'));
test(map.has('cat'));