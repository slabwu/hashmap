import { test, HashMap } from './hashmap.js';

let map = new HashMap();

map.set('dog', 'blue');
test(map.get('dog'));
test(map.get('cat'));