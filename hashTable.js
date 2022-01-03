// JS Object = Hash Table
const table1 = {};
table1['key'] = 100;
table1['key2'] = 'Hello';
console.log(table1['key']); // 100
delete table1['key'];
console.log(table1['key']); // undefined

// Map
const table2 = new Map();
table2.set('key', 100);
table2.set('key2', 'Hello');
console.log(table2.get('key'));
table2.delete('key');
console.log(table2.keys());
console.log(table2.values());

// Set
const table3 = new Set();
table3.add('key'); // key와 value가 동일하게 들어간다
console.log(table3); // { 'key' }
table3.add('key2');
console.log(table3.has('key')); // true
table3.delete('key2');
console.log(table3.size); // 1
