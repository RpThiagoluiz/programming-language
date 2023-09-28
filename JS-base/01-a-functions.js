function myFunc() {
  this.name = 'Thiago';
  const myArrowFuncIn = () => {
    //Herdar this de onde foi criada
    this.lastname = 'Luiz';
  };
  myArrowFuncIn();
}

const myArrowFuncOut = () => {
  this.outFunction = 'myArrowFuncOut';
};

console.log(new myFunc());
console.log(this);

/* 
@Funções 
* elas tem o seu próprio This
* Function é um classe com um constructor
* Por padrão o return de uma function é undefined
* A Classe, ela é um objeto que pode conter uma função e devido a isso ele pode conter variaveis.
* logo vc consegue passar um new myFunc(),



@Arrows 
* tem acesso ao escopo
* Arrow function ela não tem um constructor, logo ela não tem o this e tbm não pode ser  um new.
* Ela vai utilizar o escopo global do node.
* adc um this.name = "Thiago" e der um console.log fora no this vc consegue acessar o name.
* Ela sempre herda o this de onde foi criada.


@NoBrowser
O this é o window.
window.

@Principal diferença
Arrow ela tem o contexto de onde está inserida (node browser uma function),.... a Function ela tem o seu próprio contexto.



*/
