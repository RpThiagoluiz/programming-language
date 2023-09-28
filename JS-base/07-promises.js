/**
 *  @Promise
 * Jogada diretamente dentro da stack de excussão
 * Ela só é resolvida quando é executada.
 * Quando vc vai utilizar uma tarefa que poderá demorar muito tempo deve ser utilizado a promise
 * Para não travar a call stack a promise é utilizada, pois poderá demorar muito a ação q ela deve executar.
 * O fetch é uma promise.
 * Independente de ele vai para a stack segue o fluxo ate a msm terminar.
 */

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
  }, 2000);
});

console.log(apiCall); //Promise { <pending> }

/**
 * @then -> ele irá esperar ate a resposta ser resolvida para realizar o console.
 */

apiCall.then(() => {
  console.log('Then puro', apiCall);
});

apiCall
  .then((response) => {
    console.log(response);
    // UnhandledPromiseRejection se não tiver o catch
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * @syncFunc -> function utilizada para aportar para o JS q a msm precisa é asyncrona
 * @await -> Ele faz o JS prender a promise ate que a msm seja resolvida.
 * try/catch para server como o @then | @catch
 */

async function run() {
  try {
    const response = await apiCall;
    console.log({ AWAIT: response });
  } catch (error) {
    console.log({ runError: error });
  } finally {
    console.log(`finally`);
  }
}
run();

const apiCallOutResolve = new Promise((resolve, reject) => {
  console.log('apiCallOutResolve');
});

console.log(apiCallOutResolve);
