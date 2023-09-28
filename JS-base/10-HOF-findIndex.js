/**
 * @findIndex -> busca dentro do array
 * recebe uma function de callback
 * Ele faz interação item por item
 * A primeira que der match ele para, ele não percorre o array todo
 * @return ->  index do item encontrado
 *
 */

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 8 },
];

const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');

console.log(findIndex);
