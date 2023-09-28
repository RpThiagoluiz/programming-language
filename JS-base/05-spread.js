const testMerge = {
  name: 'Test',
  lastName: 'Merge',
};
const updateTest = {
  lastName: 'Ze',
};

/**
 * @Object -> Object.assign(target, source);
 * Faz o merge, contudo ele quebra o conceito de imutabilidade do javascript
 */
console.log(Object.assign(testMerge, updateTest));

const user = {
  firstName: 'Thiago',
  lastName: 'Gonçales',
  age: 32,
  skills: [
    'cozinheiro',
    'confeiteiro',
    'padeiro',
    {
      name: 'Javascript',
    },
  ],
};

const updateUser = {
  ...user,
  age: 85,
  skills: [...user.skills, 'pro player'],
};

console.log(updateUser);
/**
 * @Spread
 * Sintaxe é a msm do rest.
 * Você não precisa passar todas as props.
 * A ultima vez que vc chama a prop a msm será sobre escrita, assim o obj user não será alterado.
 */
