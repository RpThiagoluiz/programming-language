function defaultParams(params = 'Thiago') {
  console.log(params);
}

console.log('defaultParams', defaultParams());
console.log('withParams', defaultParams('Typescript'));
