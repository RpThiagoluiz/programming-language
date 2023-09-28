/**
 * @Filter -> Criar um novo array removendo o item que foi solicitado ou a logica aplicada
 * Se ele for salvo em uma variavel pois o msm pode remover diretamente e alterar o array original
 * @return -> Return o filtro que foi aplicado
 */

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 8 },
];

const filter = array.filter((product) => product.price > 5000);

console.log({ filter });
