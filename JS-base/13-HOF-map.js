/**
 * @map -> Percorre os itens e faz a logica que foi aplicada,
 * adc, alterar ou remover um item do array base
 * Criar um novo array, ele não altera o array existente
 * @return
 * -> sempre vai ser um array com o msm numero de posições do array base
 * -> Ele exibe o valor do return sendo o msm que a function retornou
 */

const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 8 },
];

const map = array.map((el) => ({
  ...el,
  brand: 'apple',
}));

console.log(map);
