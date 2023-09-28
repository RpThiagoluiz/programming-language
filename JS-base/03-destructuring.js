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

const firstName = user.firstName;

const { lastName, skills, age: userAge, ...userRest } = user;
const [first, ...skillsRest] = skills;
/**
 * @Destructuring
 * Problema na vida real, é que se o user for undefined o código irá quebrar
 * Em array usa o index (posição), o nome é o que vc quiser.
 */
