import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

const test = new HashMap();

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
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('moon', 'silver')

const set = new HashSet();
set.add("apple");
set.add("apple");      // aynı değer, ikinci kez eklenmemeli
console.log(set.length());           // 1 olmalı
set.has("apple");       // true
set.remove("apple");    // true
console.log(set.length());           // 0