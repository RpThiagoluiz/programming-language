/**
 * @some -> verificar se algum item do array bate com a condição.
 * @return -> boolean
 */

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 8 },
];

const someMoreThan = array.some((product) => product.price > 1000);
const someLessThan = array.some((product) => product.price < 1000);

console.log({ someMoreThan, someLessThan });
