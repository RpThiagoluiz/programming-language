/**
 * @every -> verificar se todos item do array bate com a condição.
 * @return -> boolean
 */

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 8 },
];

const everyMoreThan = array.some((product) => product.price >= 1000);
const everyLassThan = array.some((product) => product.price > 1000);

console.log({ everyMoreThan, everyLassThan });
