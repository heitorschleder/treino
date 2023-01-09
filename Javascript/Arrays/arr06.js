let arr = [1, 2, 3, 4]
//console.log(arr.reverse())


let j = 0;
let soma = arr.reduce( function(acumulador, atual, i, _arr){
    console.log("i: ", i)
    console.log("j: ", j++)
    console.log("acumulador :", acumulador,"atual: ", atual)
    return acumulador + atual
}, 0)
console.log(soma)
console.log(arr)

const nomes = ["Daniel", "Maria", "Joana", "João"]
let nomesPorOrdem = nomes.reduce( function(nomes, nomeAtual){
    let primeiraletra = nomeAtual[0]
    if (nomes[primeiraletra]){
        nomes[primeiraletra]++
    } else {
        nomes[primeiraletra] = 1
    } return nomes
}, {})

console.log(nomesPorOrdem)

// reduce é complexo porém parece ser útil
// reverse é isso mesmo que tu ta pensando, modifica a arr original