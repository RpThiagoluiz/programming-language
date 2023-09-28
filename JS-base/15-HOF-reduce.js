/**
 * @Reduce -> recebe 2 argumentos acumulador e o item
 * A logica dele é transformar o dado.
 * @acc | @accumulator | @firstArg -> ele sera o acumulador o que junta tudo
 * @cur | @currency | @secArg -> o item que esta sendo lido naquele momento
 * @return -> Return o filtro que foi aplicado
 */

const clients = [
  { client: 'John Doe', score: 50, id: '1st', boughtThisMonth: false },
  { client: 'Jack Doe', score: 80, id: '2nd', boughtThisMonth: true },
  { client: 'Margaret Doe', score: 50, id: '3rd', boughtThisMonth: true },
];

const orderById = clients.reduce(
  (acc, cur) => ({
    ...acc,
    [cur.id]: cur.client,
  }),
  {}
);
/**
 * a sintaxe depois do call back indica que o return sera um obj
 * @return -> {'1st': ...,'2nd': ...}
 */

const boughtThisMonth = clients.reduce((acc, cur) => {
  if (cur.boughtThisMonth) {
    return [...acc, cur];
  }
  return acc;
}, []);

const totalScore = clients.reduce((acc, cur) => acc + cur.score, 0);

/**
 * @return -> totalScore: 180
 */

/**
 * @return -> array com os clientes que compraram esse mes
 */

const listShop = ['Pao', 'Queijo', 'Pao', 'Tomate'];

const occurrences = listShop.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] || 0) + 1,
  }),
  {}
);

/**
 * @return -> Quantidade de itens que estao sendo repetidos
 * occurrences: { Pao: 2, Queijo: 1, Tomate: 1 }
 */

const arrayBidimensional = [
  ['Abacate', 'uva'],
  ['Joao', 'Jose'],
  ['batata', 'cebola'],
];

const singleArray = arrayBidimensional.reduce((acc, cur) => acc.concat(cur));

/**
 * @return -> array simples
 */

console.log({
  orderById,
  boughtThisMonth,
  occurrences,
  totalScore,
  singleArray,
});
