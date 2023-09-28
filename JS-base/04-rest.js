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
 * @Rest
 * Precisa ser a ultima coisa do destructuring.
 */
