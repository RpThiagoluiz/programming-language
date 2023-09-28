export default function sayHello(name) {
  console.log(`Ola, ${name}`);
}

/**
 * @default -> exportar utilizando essa tag
 * @nameless -> export {sayHello}
 * @import -> se for nameless vc utiliza import {func} from ...
 * @renomear -> import {func as myNewFunction} from ...
 */
