// funciones que se DECALRAN con la palabra reservada function
function Fn() {
    // { prop: 'propiedad'}
    // 
    this.prop = 'propiedad'
    // return 'chanchito feliz'
}

Fn.prototype.lala = function FuncionDePrototipo() {}

const r = new Fn()
// console.log(r.__proto__)
// 

// fat arrow function

// console.log(this)

const fatFn = () => { // NO TIENEN CONTEXTO DE THIS!!!!
    this.prop = 'lala';
}

const r1 = fatFn()
// console.log(this)
// console.log(r1)
// 

// retunr implicito
const fnR = () => 2

console.log(fnR())