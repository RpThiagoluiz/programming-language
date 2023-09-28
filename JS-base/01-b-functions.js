function sumArgs() {
  console.log('sumArgs', arguments); //Object.values(arguments)
}

function sumRest(firstArg, ...rest) {
  console.log('sumRest - rest', { firstArg }, rest); //Object.values(arguments)
}

const sumArrow = () => {
  console.log('sumArrow', arguments);
};

sumArgs(1, 2, 3, 4, 5, 6, 7, 8, 'Ultimo');

/**
 * @arguments o JS reconhece automaticamente o arguments
 * Não há a necessidade passar mais nda, pois o JS já entende isso
 * Na arrow function @arguments irá funcionar como o this o msm irá herdar os args do seu Pai
 *
 */
