/**
 * @includes -> case sensitive
 * return boolean
 */
const tech = 'Node.js';

const includes = tech.includes('.js');
const notIncludes = tech.includes('arroz');

console.log({ includes, notIncludes });

/**
 * @Array -> ele verifica se da um match com o nome do array.
 * Tem quer igual pois são case sensitive
 *
 */
const techArray = ['Node.js', 'React'];
console.log(techArray.includes('.js'));
